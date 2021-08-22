/* eslint-disable linebreak-style */
import GoblinCell from './GoblinCell';

document.addEventListener('DOMContentLoaded', () => {
  const goblinCell = new GoblinCell();
  goblinCell.createField();
  const goblinFlip = goblinCell.flip.bind(goblinCell);
  setInterval(goblinFlip, 2000);
});
