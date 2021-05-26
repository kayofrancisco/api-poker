import { container } from 'tsyringe';

import { IClubeRepository } from '../../modulos/clubes/repositories/IClubeRepository';
import ClubeRepository from '../../modulos/clubes/repositories/implementation/ClubeRepository';
import { IModalidadeRepository } from '../../modulos/modalidades/repositories/IModalidadeRepository';
import ModalidadeRepository from '../../modulos/modalidades/repositories/implementation/ModalidadeRepository';

container.registerSingleton<IClubeRepository>('ClubeRepository', ClubeRepository);
container.registerSingleton<IModalidadeRepository>('ModalidadeRepository', ModalidadeRepository);
