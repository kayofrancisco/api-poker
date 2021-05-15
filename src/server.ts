import express from 'express';
import swagger from 'swagger-ui-express';

import rotas from './routes/intex';
import arquivoSwagger from './swagger.json';

const app = express();

app.use(express.json());
app.use('/api-docs', swagger.serve, swagger.setup(arquivoSwagger));
app.use(rotas);

app.listen(3333, () => console.log('server is running'));
