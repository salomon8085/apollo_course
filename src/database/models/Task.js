const { Schema, model } = require("mongoose");

const taskSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
  },
  {
    timestamps: true,
    versionKey: false /*Mongosse crea una Key llamada __V, asi no le crea */,
  }
);

module.exports= model('Task', taskSchema);
