import express from 'express';

import rotas from './routes/intex';

const app = express();

app.use(express.json());
app.use(rotas);

app.listen(3333, () => console.log('server is running'));
