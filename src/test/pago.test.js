const request = require("supertest");
const mongoose = require("mongoose");
const { MongoMemoryServer } = require("mongodb-memory-server");
const app = require("../server");
const Pago = require("../models/Pago");

let mongoServer;

beforeAll(async () => {
  mongoServer = await MongoMemoryServer.create();
  const mongoUri = mongoServer.getUri();
  await mongoose.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true });
});

afterAll(async () => {
  await mongoose.connection.close();
  await mongoServer.stop();
});

describe("Pruebas de Pago", () => {
  it("Debe registrar un pago exitosamente", async () => {
    const response = await request(app)
      .post("/api/pagos/pagar")
      .send({
        usuarioId: "12345",
        articulos: [{ nombre: "Laptop", cantidad: 1, precioUnitario: 1000 }],
        total: 1000,
        fechaCompra: "26-03-2025"
      });

    expect(response.statusCode).toBe(200);
    expect(response.body.mensaje).toBe("Pago registrado correctamente");
    expect(response.body.pago.total).toBe(1000);
  });

  it("Debe rechazar un pago con total incorrecto", async () => {
    const response = await request(app)
      .post("/api/pagos/pagar")
      .send({
        usuarioId: "12345",
        articulos: [{ nombre: "Laptop", cantidad: 1, precioUnitario: 1000 }],
        total: 900, // Error intencional
        fechaCompra: "26-03-2025"
      });

    expect(response.statusCode).toBe(400);
    expect(response.body.estado).toBe("declinado");
    expect(response.body.mensaje).toBe("El total de la transacción no coincide.");
  });

  it("Debe consultar pagos de un usuario", async () => {
    await new Pago({
      usuarioId: "12345",
      articulos: [{ nombre: "Laptop", cantidad: 1, precioUnitario: 1000 }],
      total: 1000,
      fechaCompra: "26-03-2025",
      estado: "aprobado"
    }).save();

    const response = await request(app).get("/api/pagos/consultar/12345");

    expect(response.statusCode).toBe(200);
    expect(response.body.length).toBeGreaterThan(0);
    expect(response.body[0].usuarioId).toBe("12345");
  });
});
