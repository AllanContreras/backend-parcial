const express = require("express");
const Pago = require("../models/Pago");

const router = express.Router();

// 📌 Registrar un pago
router.post("/pagar", async (req, res) => {
  try {
    const { usuarioId, articulos, fechaCompra } = req.body;

    // Validar que los artículos tengan datos correctos
    let totalCalculado = 0;
    articulos.forEach((art) => {
      totalCalculado += art.precioUnitario * art.cantidad;
    });

    if (req.body.total !== totalCalculado) {
      return res.status(400).json({ estado: "declinado", mensaje: "El total de la transacción no coincide." });
    }

    // Crear el pago
    const nuevoPago = new Pago({
      usuarioId,
      articulos,
      total: totalCalculado,
      fechaCompra,
      estado: "aprobado",
    });

    await nuevoPago.save();
    res.json({ mensaje: "Pago registrado correctamente", pago: nuevoPago });
  } catch (error) {
    res.status(500).json({ estado: "declinado", mensaje: "Error en el servidor", error: error.message });
  }
});

// 📌 Consultar pagos por usuario
router.get("/consultar/:usuarioId", async (req, res) => {
  try {
    const pagos = await Pago.find({ usuarioId: req.params.usuarioId });
    res.json(pagos);
  } catch (error) {
    res.status(500).json({ mensaje: "Error en el servidor", error: error.message });
  }
});

module.exports = router;
