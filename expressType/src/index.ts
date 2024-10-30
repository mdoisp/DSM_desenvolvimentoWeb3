import express from "express";
import userRoutes from "./routes/user"
const app = express();

app.use('/api/v1', userRoutes);

app.listen(3000, () => {
    console.info('Server rodando na porta 3000');
});

//npm i --save-dev typescript @types/node @types/express
//npm i -g vercel
//vercel login