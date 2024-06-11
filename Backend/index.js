import express from 'express'
import cors from "cors";
import { mongoConnect } from './src/config/db.js';
import dotenv from "dotenv";
import paymentsRouter from './src/routes/paymentsRoute.js';
import path from 'path'
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();

const PORT = process.env.PORT || 8000
const app = express()

app.use(express.json());

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/src/views'));

app.use(
    cors({
      origin: [
        "http://localhost:5173",
        "http://localhost:5174",

        "https://headgen-mern-2.vercel.app",
        "https://headgen-mern.vercel.app",
        "https://headgen.ai",
      ],
      // credentials: true,
      methods: ["GET", "PUT", "POST", "PATCH", "DELETE"],
      allowedHeaders: ["Content-Type", "Authorization", "x-csrf-token"],
      exposedHeaders: ["*", "Authorization"],
    })
  );

// routes

app.use('/api/v1/payment', paymentsRouter)



app.listen(PORT, () => {
    console.log(`Connected to port ${process.env.PORT}`)
    mongoConnect();
} )

