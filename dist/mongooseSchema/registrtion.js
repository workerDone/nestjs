"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
exports.RegistrationSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    password: String,
    email: String,
});
//# sourceMappingURL=registrtion.js.map