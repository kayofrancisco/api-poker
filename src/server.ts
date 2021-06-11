import 'reflect-metadata';
import cors from 'cors';
import express, { NextFunction, Request, Response } from 'express';
import 'express-async-errors';
import swagger from 'swagger-ui-express';

import { AppError } from './errors/AppError';
import rotas from './routes/intex';
import arquivoSwagger from './swagger.json';

import './database';

import './shared/container';

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api-docs', swagger.serve, swagger.setup(arquivoSwagger));
app.use(rotas);

app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
  if (err instanceof AppError) {
    return response.status(err.codigoStatus).json({
      messages: err.messages,
    });
  }

  return response.status(500).json({
    message: 'Erro interno',
  });
});

app.listen(3333, () => console.log('server is running'));
