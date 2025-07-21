# ⏰ Microservicio: time-service

Este microservicio, desarrollado con NestJS, responde a solicitudes TCP enviando la hora actual en formato local de Ecuador.

---

## 📦 Requisitos

- Node.js (v18+)
- NestJS CLI (`npm install -g @nestjs/cli`)

---

## ⚙️ Instalación

```bash
npm install
```
---

## ▶️ Ejecución
```bash
npm run start
```
Este microservicio se ejecuta en el puerto TCP 3001.

---

## 🔁 Funcionalidad
Escucha solicitudes TCP con el patrón get_time.

Devuelve la hora local en formato legible (toLocaleString) con zona horaria de Ecuador (America/Guayaquil).

---

## 📂 Estructura
main.ts: inicia el microservicio TCP.

app.controller.ts: maneja la lógica para responder con la hora actual.

app.module.ts: módulo raíz del proyecto.