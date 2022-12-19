import express from 'express';
import  ballRouter  from './route/route.js';
import db from './config/config.js';

const PORT = 1909;
const app = express()
app.use(express.json())
app.use('/api/',ballRouter)

app.listen(PORT, () => {
    console.log(`App is listening to port: ${PORT}`)
});