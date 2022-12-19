import { handleNovoItem } from './criaTarefa.js';
import { carregaTarefa } from './carregaTarefa.js'

const newTask = document.querySelector('[data-form-button]');

newTask.addEventListener('click', handleNovoItem)

carregaTarefa();



