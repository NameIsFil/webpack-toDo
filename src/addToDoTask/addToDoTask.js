import { toDoColumn } from '../elements';
import { removeTask } from '../removeTask/removeTask';
import { pushRight } from '../pushRight/pushRight';
import { pushLeft } from '../pushLeft/pushLeft';

const inputField = document.querySelector('#input-field');

const addToDoTask = () => {
  const taskCard = document.createElement('div');
  let taskName = document.createElement('h3');
  const buttonBar = document.createElement('div');
  const deleteButton = document.createElement('i');
  const rightArrow = document.createElement('i');
  const leftArrow = document.createElement('i');

  taskCard.classList.add('item');
  buttonBar.classList.add('button-row');
  deleteButton.className = 'bi bi-trash';
  deleteButton.classList.add('trash-can');
  deleteButton.classList.add('icon');
  rightArrow.className = 'bi bi-arrow-right-circle';
  rightArrow.classList.add('icon');
  leftArrow.className = 'bi bi-arrow-left-circle';
  leftArrow.classList.add('icon');
  if (inputField.value === '') {
    return;
  }
  taskName.innerText = inputField.value;
  buttonBar.append(leftArrow, deleteButton, rightArrow);
  taskCard.append(taskName, buttonBar);
  toDoColumn.append(taskCard);
  inputField.value = '';

  deleteButton.addEventListener('click', () => {
    removeTask(taskCard);
  });

  rightArrow.addEventListener('click', () => {
    pushRight(taskCard);
  });

  leftArrow.addEventListener('click', () => {
    pushLeft(taskCard);
  });
};

export { addToDoTask };
