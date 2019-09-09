import mongoose from 'mongoose';


let userSchema = new mongoose.Schema({
    username: String,
    first: String,
    last: String,
    password: String,

});
userSchema.set('timestamps', true);

userSchema.virtual('fullName').get(function () {
    return `${this.first} ${this.last}`;
});

//before save to database
userSchema.pre('save', function (next) {
    this.username = this.username.toLowerCase();
    this.first = this.first.toLowerCase();
    this.last = this.last.toLowerCase();
    next();
});

export default mongoose.model('user', userSchema);