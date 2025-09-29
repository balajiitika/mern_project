import mongoose from 'mongoose'

const chatSchema = new mongoose.Schema({
    Username: { type: String, required: true },
    Message: { type: String, required: true },
    Timestamp: { type: Date, default: Date.now }
});

export const chatModel = mongoose.model('Chat', chatSchema)
