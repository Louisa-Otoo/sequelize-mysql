import express from 'express'
import dotenv from 'dotenv'
dotenv.config()
import sequelize from './config/db.js'
import userRoutes from './router/routes.js'


const PORT = process.env.PORT


const app = express();
app.use(express.json());
app.use('/api', userRoutes)


app.listen(PORT, () => console.log(`server started on port ${PORT}`));