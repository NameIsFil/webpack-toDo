import { doingColumn, doneColumn, toDoColumn } from '../elements';

const pushRight = (card) => {
  const isCardInToDo = toDoColumn.contains(card);
  const isCardInDoing = doingColumn.contains(card);
  if (isCardInToDo) {
    card.remove();
    doingColumn.append(card);
  } else if (isCardInDoing) {
    card.remove();
    doneColumn.append(card);
  }
};

export { pushRight };
