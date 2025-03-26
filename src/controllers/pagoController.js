const Pago = require("../models/Pago");

exports.realizarPago = async (req, res) => {
    try {
        const { usuarioId, articulos, fechaCompra } = req.body;

        // Validar formato de fecha
        if (!/^\d{2}-\d{2}-\d{4}$/.test(fechaCompra)) {
            return res.status(400).json({ mensaje: "Fecha inválida, formato esperado DD-MM-YYYY" });
        }

        // Calcular el total
        let totalCalculado = 0;
        articulos.forEach((art) => {
            totalCalculado += art.precioUnitario * art.cantidad;
        });

        if (!req.body.total || req.body.total !== totalCalculado) {
            return res.status(400).json({ mensaje: "El total ingresado no coincide con la suma de los productos" });
        }

        const nuevoPago = new Pago({
            usuarioId,
            articulos,
            total: totalCalculado,
            fechaCompra,
            estado: "APROBADO",
        });

        await nuevoPago.save();
        res.status(201).json(nuevoPago);
    } catch (error) {
        res.status(500).json({ mensaje: "Error en el servidor", error });
    }
};

exports.obtenerPagos = async (req, res) => {
    try {
        const { usuarioId } = req.params;
        const pagos = await Pago.find({ usuarioId });

        if (!pagos.length) {
            return res.status(404).json({ mensaje: "No se encontraron pagos" });
        }

        res.json(pagos);
    } catch (error) {
        res.status(500).json({ mensaje: "Error en el servidor", error });
    }
};
