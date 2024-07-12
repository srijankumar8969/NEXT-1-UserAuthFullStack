import { log } from 'console';
import mongoose from 'mongoose';

export async function connect(){
    try{
        mongoose.connect(process.env.MONGO_URI!)
        .then(()=>console.log('connected')
        ).catch((err)=>console.log(err))
    }catch(error){
        console.log(error)
    }
}