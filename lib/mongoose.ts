import mongoose from 'mongoose';

let isConnected: boolean = false;

export async function connectToDatabase () {

  try {
    console.log('MongoDB is connected');
  } catch (error) {
    console.log('MongoDB connection failed', error)
  }
}