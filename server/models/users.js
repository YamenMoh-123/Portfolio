import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    userEmail: {
        type: String,
        required: true
    },
    userLastName: {
        type: String,
        required: true
    },
    userFirstName: {
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
    },
    authenticated: {
        type: Boolean,
        default: ()=> false  
    }

});


let User = mongoose.model('Users', userSchema);
export default User;

