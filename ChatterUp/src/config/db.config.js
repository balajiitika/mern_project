import mongoose from 'mongoose'

const url = process.env.MONGODB

export const Connect = async() => {
    try {
        await mongoose.Connect(url, {
            useNewUrlParser: true
        })
        console.log("MongoDB connected using mongoose")
    } catch (error) {
        console.log('Error: ' + error)
    }
    
}