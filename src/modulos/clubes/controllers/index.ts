import ClubeRepository from '../repositories/implementation/ClubeRepository';
import ClubeService from '../services/ClubeService';
import ClubeController from './ClubeController';

const clubeRepository = ClubeRepository.getInstance();
const clubeService = new ClubeService(clubeRepository);
const clubeController = new ClubeController(clubeService);

export default clubeController;
