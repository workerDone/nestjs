import * as mongoose from 'mongoose';

export const RegistrationSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    password: String,
    email: String,
});