const mongoose = require("mongoose");

const schema = new mongoose.Schema(
  {
    urloriginal: {
      type: String,
      required: [true, "Você precisa adicionar uma Url."],
    },
    urlmodificada: { type: String },
    usuario: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Usuario",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Url", schema);
