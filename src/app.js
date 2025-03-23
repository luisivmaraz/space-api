import express from 'express';
import morgan from 'morgan';
import { config } from "dotenv";
import cors from 'cors';  
config();
import routerEspacios from './routes/espacioRoutes.js'; 

const app = express();


app.set('view engine', 'ejs');

// middlewares
app.use(cors({  
  origin: '*',  
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],  
}));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'));
app.use('/', routerEspacios); 

export default app;
