"use server"

import {connectToDatabase} from "@/lib/mongoose";
import {CreateAnswerParams} from "@/lib/actions/shared.types";
import {revalidatePath} from "next/cache";
import Answer from "@/database/answer.model";
import Question from "@/database/question.model";

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

        // TODO: Need to add interactions model on app

        revalidatePath(path)
    } catch (error) {
        console.log('error')
    }
}