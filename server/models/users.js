import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    id: Number,
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
    },
    createdAt:{
        type: Date,
        immutable: true,
        default: ()=> new Date()
    }

});


let User = mongoose.model('Users', UserSchema);
export default User;

