import { container } from 'tsyringe';

import { IClubeRepository } from '../../modulos/clubes/repositories/IClubeRepository';
import ClubeRepository from '../../modulos/clubes/repositories/implementation/ClubeRepository';

container.registerSingleton<IClubeRepository>('ClubeRepository', ClubeRepository);
