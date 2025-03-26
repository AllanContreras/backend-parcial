const mongoose = require("mongoose");

const PagoSchema = new mongoose.Schema({
  usuarioId: { type: String, required: true },
  articulos: [
    {
      nombre: { type: String, required: true },
      cantidad: { type: Number, required: true, min: 1 },
      precioUnitario: { type: Number, required: true, min: 0 },
    },
  ],
  total: { type: Number, required: true, min: 0 },
  fechaCompra: { type: String, required: true, match: /^\d{2}-\d{2}-\d{4}$/ },
  estado: { type: String, enum: ["aprobado", "declinado"], default: "aprobado" },
  mensaje: { type: String, default: "" },
});

module.exports = mongoose.model("Pago", PagoSchema);
