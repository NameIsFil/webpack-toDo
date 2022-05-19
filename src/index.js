import './styles.css';
import { addToDoTask } from './addToDoTask/addToDoTask';
import { pushLeft } from './pushLeft/pushLeft';
import { pushRight } from './pushRight/pushRight';
import { removeTask } from './removeTask/removeTask';

const addItemButton = document.querySelector('#add-item-button');

addItemButton.addEventListener('click', addToDoTask);
