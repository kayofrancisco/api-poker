import { container } from 'tsyringe';

import { IClubeRepository } from '../../modulos/clubes/repositories/IClubeRepository';
import ClubeRepository from '../../modulos/clubes/repositories/implementation/ClubeRepository';
import { IModalidadeRepository } from '../../modulos/modalidades/repositories/IModalidadeRepository';
import ModalidadeRepository from '../../modulos/modalidades/repositories/implementation/ModalidadeRepository';
import TransacaoRepository from '../../modulos/transacoes/repositories/implementation/TransacaoRepository';
import { ITransacaoRepository } from '../../modulos/transacoes/repositories/ITransacaoRepository';

container.registerSingleton<IClubeRepository>('ClubeRepository', ClubeRepository);
container.registerSingleton<IModalidadeRepository>('ModalidadeRepository', ModalidadeRepository);
container.registerSingleton<ITransacaoRepository>('TransacaoRepository', TransacaoRepository);
