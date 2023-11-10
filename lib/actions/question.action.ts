"use server"

import {connectToDatabase} from "@/lib/mongoose";

export async function createQuestion(params: any) {
    try {
        await connectToDatabase()
        console.log('connected to database')
    } catch (error) {
        console.log('error')
    }
}