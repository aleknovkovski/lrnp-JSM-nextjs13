"use server"

import {connectToDatabase} from "@/lib/mongoose";
import Question from "@/database/question.model";

export async function createQuestion(params: any) {
    try {
        await connectToDatabase()
        console.log('connected to database')
        const { title, content, tags, author, path } = params;

        // Create the question
        const question = await Question.create({
            title,
            content,
            author
        });

    } catch (error) {
        console.log('error')
    }
}