import { AppDataSource } from "./data-source"
import productRoutes from './routes/product.route'
const express = require('express')

const app = express()
app.use(express.json());
const port = 3000

app.use("/api/v1", productRoutes)

app.listen(port, () => console.log(`Listening on port http://localhost:${port}`))

AppDataSource.initialize()
                .then(() => console.log("Database connected!"))
                .catch(error => console.log(error))