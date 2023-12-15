"use server"

import {connectToDatabase} from "@/lib/mongoose";
import {AnswerVoteParams, CreateAnswerParams, DeleteAnswerParams, GetAnswersParams} from "@/lib/actions/shared.types";
import {revalidatePath} from "next/cache";
import Answer from "@/database/answer.model";
import Question from "@/database/question.model";
import User from "@/database/user.model";
import Interaction from "@/database/interaction.model";

export async function getAllAnswers(params: GetAnswersParams) {
 try {
   connectToDatabase();

   const { questionId, sortBy } = params;

    let sortOptions = {};

    switch (sortBy) {
      case "highestUpvotes":
        sortOptions = { upvotes: -1 }
        break;
      case "lowestUpvotes":
        sortOptions = { upvotes: 1 }
        break;
      case "recent":
        sortOptions = { createdAt: -1 }
        break;
      case "old":
        sortOptions = { createdAt: 1 }
        break;

      default:
        break;
    }

   const answers = await Answer.find({ question: questionId })
  .populate({ path: 'author', model: User, select: '_id clerkId name picture'})
  .sort(sortOptions);

   return { answers }
 } catch (error) {
   console.log(error);
   throw error;
 }
}

export async function createAnswer(params: CreateAnswerParams) {
    try {
        await connectToDatabase()
        console.log('connected to database')
        const { question, content, author, path } = params;

        // Create the question
        const answer = await Answer.create({
            question,
            content,
            author
        });

        // Add the answer to the question's answers array
        Question.findByIdAndUpdate(question, { $push: { answers: answer._id } })

        // TODO: Add interaction
        // Need to have an interactions model in the app first

        revalidatePath(path)
    } catch (error) {
        console.log('error')
    }
}

export async function upvoteAnswer(params: AnswerVoteParams) {
  try {
    connectToDatabase();

    const { answerId, userId, hasupVoted, hasdownVoted, path } = params;

    let updateQuery = {};

    if(hasupVoted) {
      updateQuery = { $pull: { upvotes: userId }}
    } else if (hasdownVoted) {
      updateQuery = {
        $pull: { downvotes: userId },
        $push: { upvotes: userId }
      }
    } else {
      updateQuery = { $addToSet: { upvotes: userId }}
    }

    const answer = await Answer.findByIdAndUpdate(answerId, updateQuery, { new: true });

    if(!answer) {
      throw new Error("Answer not found");
    }

    // Increment author's reputation

    revalidatePath(path);
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function downvoteAnswer(params: AnswerVoteParams) {
  try {
    connectToDatabase();

    const { answerId, userId, hasupVoted, hasdownVoted, path } = params;

    let updateQuery = {};

    if(hasdownVoted) {
      updateQuery = { $pull: { downvote: userId }}
    } else if (hasupVoted) {
      updateQuery = {
        $pull: { upvotes: userId },
        $push: { downvotes: userId }
      }
    } else {
      updateQuery = { $addToSet: { downvotes: userId }}
    }

    const answer = await Answer.findByIdAndUpdate(answerId, updateQuery, { new: true });

    if(!answer) {
      throw new Error("Answer not found");
    }

    // Increment author's reputation

    revalidatePath(path);
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function deleteAnswer(params: DeleteAnswerParams) {
    try {
        connectToDatabase();

        const { answerId, path } = params;

        const answer = await Answer.findById(answerId);

        if(!answer) {
            throw new Error("Answer not found");
        }

        await answer.deleteOne({ _id: answerId });
        await Question.updateMany({ _id: answer.question }, { $pull: { answers: answerId }});
        await Interaction.deleteMany({ answer: answerId });

        revalidatePath(path);
    } catch (error) {
        console.log(error);
    }
}