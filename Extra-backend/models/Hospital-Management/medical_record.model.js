const mongoose = require("mongoose");

const medicalRecordSchema = new mongoose.Schema({}, { timestamps: true });

const MedicalRecord = mongoose.model("MedicalRecord", medicalRecordSchema);

module.exports = MedicalRecord;
