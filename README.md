# backend-parcial


## CREAMOS EL PROYECTO 
![01](https://github.com/user-attachments/assets/1d6f4a32-c266-4ec8-ade4-06d1cc8f9d2f)

## INSTALAMOS LOS PAQUETES
![02](https://github.com/user-attachments/assets/764bfe31-4f28-4636-9665-f2b3d698aae6)
##
![03](https://github.com/user-attachments/assets/ba9d2aa2-4fb8-4a2e-9e64-8b53669c0c94)
## LA ESRUCTURA QUE HICIMOS PARA NUESTRO PROYECTO
ACA YA TENEMOS LAS CLASES QUE VAMOS A USAR YA NOS FALTARIA LA DE TESTS QUE LA AGREGAREMOS MAS ADELANTE
![04](https://github.com/user-attachments/assets/66444520-0102-4c65-a73e-b54d7bb41507)
## LE AGREGAMOS AL PACKAGE.JSON
![05](https://github.com/user-attachments/assets/5a5b5760-10fa-4f61-ac82-57472d5dcd73)
## DESCARGAMOS PARA LAS PRUEBAS 
![06](https://github.com/user-attachments/assets/5ee6342e-1ff1-49d8-b37f-6a5e7559bd5d)
## NUESTROS TESTS
![image](https://github.com/user-attachments/assets/2a0c756b-539d-446c-9ea4-d98870471b65)

# Backend - Sistema de Pagos

Este es el backend del sistema de pagos, encargado de manejar la lógica de negocio y la base de datos. Expone una API REST que permite la gestión de usuarios, transacciones y reportes.

##  Arquitectura

El backend sigue una arquitectura **MVC (Modelo-Vista-Controlador)**, donde:

- **Modelo:** Define la estructura de los datos y las relaciones en la base de datos.
- **Controlador:** Gestiona las solicitudes HTTP y coordina la lógica del negocio.
- **Vista (API):** Expone endpoints REST para la comunicación con el frontend.

El servidor está construido con **Node.js y Express**, y utiliza **MongoDB** como base de datos.

## Tecnologías usadas

- **Node.js** - Entorno de ejecución de JavaScript.
- **Express.js** - Framework para la creación de APIs.
- **MongoDB** - Base de datos NoSQL para almacenar transacciones y usuarios.
- **Mongoose** - ODM para gestionar MongoDB en Node.js.
- **JWT (JSON Web Token)** - Para autenticación y seguridad.
- **Dotenv** - Manejo de variables de entorno.


