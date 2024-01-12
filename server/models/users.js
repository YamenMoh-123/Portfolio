import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true,
        unique: true
    },
    lastName: {
        type: String,
    },
    firstName: {
        type: String,
    },
    password: {
        type: String,
        required: true,
    },
    createdAt:{
        type: Date,
        immutable: true,
        default: ()=> new Date()
    },
    authenticated: {
        type: Boolean,
        default: ()=> false  
    }

});


let User = mongoose.model('Users', userSchema);
export default User;

