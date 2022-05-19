import { doingColumn, doneColumn, toDoColumn } from '../elements';

const pushLeft = (card) => {
  const isCardInDone = doneColumn.contains(card);
  const isCardInDoing = doingColumn.contains(card);
  if (isCardInDone) {
    card.remove();
    doingColumn.append(card);
  } else if (isCardInDoing) {
    card.remove();
    toDoColumn.append(card);
  }
};

export { pushLeft };
