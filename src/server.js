require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

// Middleware
app.use(express.json()); // Permite recibir JSON en las peticiones
app.use(cors()); // Habilita CORS para la comunicación con el frontend

// Conectar a MongoDB
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("✅ Conectado a MongoDB"))
  .catch((err) => console.error("❌ Error de conexión a MongoDB:", err));

// Ruta de prueba
app.get("/", (req, res) => {
  res.send("¡El backend está funcionando!");
});

// Puerto del servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Servidor corriendo en el puerto ${PORT}`));
