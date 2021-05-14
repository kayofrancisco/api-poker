import ModalidadeRepository from '../repositories/implementation/ModalidadeRepository';
import ModalidadeService from '../services/ModalidadeService';
import ModalidadeController from './ModalidadeController';

const modalidadeRepository = ModalidadeRepository.getInstance();
const modalidadeService = new ModalidadeService(modalidadeRepository);
const modalidadeController = new ModalidadeController(modalidadeService);

export default modalidadeController;
