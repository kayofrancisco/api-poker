import PartidaRepository from '../repositories/implementation/PartidaRepository';
import PartidaService from '../services/PartidaService';
import PartidaController from './PartidaController';

const partidaRepository = PartidaRepository.getInstance();
const partidaService = new PartidaService(partidaRepository);
const partidaController = new PartidaController(partidaService);

export default partidaController;
