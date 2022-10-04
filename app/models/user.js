import mongoose from 'mongoose';
import passportLocalMongoose from 'passport-local-mongoose';

const PassportLocalMongoose = mongoose;
const Schema = mongoose.Schema;

const userSchema = new Schema({
    displayName: String,
    username: String,
    emailAddress: String
},{
    timestamps:true,
    collection : 'users'
})

userSchema.plugin(passportLocalMongoose);

export default mongoose.model('user', userSchema)