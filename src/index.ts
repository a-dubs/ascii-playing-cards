import asciiCardTemplate from './card';
import SUITS from './card/suits.json';
import COLORS from './card/colors.json';
import { CardInfo } from './types';

function drawCard(
  rank: string,
  suit: string,
  color: string = COLORS.black,
  height = 0
): string {
  const suitIcon = _getSuitIcon(suit, color);
  const spacing = new Array(
    asciiCardTemplate.face[0].length - rank.length - 1
  ).join(' ');

  return _buildCardString(asciiCardTemplate.face, height)
    .replace(/{suit}/g, suitIcon)
    .replace(/{rank}/g, rank)
    .replace(/{spacing}/g, spacing);
}

function drawCards(cardInfos: CardInfo[]): string {
  // get strings for each card, then join them together so they are side by side with one space between
  const cardStrings = cardInfos.map(cardInfo =>
    drawCard(cardInfo.rank, cardInfo.suit)
  );
  const cardRows = cardStrings.map(card => card.split('\n'));
  const height = Math.max(...cardRows.map(row => row.length));
  const paddedCardRows = cardRows.map(row => {
    const padding = new Array(height - row.length).fill(
      ' '.repeat(row[0].length)
    );
    return row.concat(padding);
  });
  const combinedRows = paddedCardRows[0].map((_, i) =>
    paddedCardRows.map(row => row[i]).join(' ')
  );
  return combinedRows.join('\n');
}

function drawDeck(height = 0): string {
  return _buildCardString(asciiCardTemplate.back, height);
}

function _getSuitIcon(suit = '?', color: string = COLORS.black): string {
  switch (suit) {
    case SUITS.diamond:
      return color === COLORS.black ? '♦' : '♢';
    case SUITS.heart:
      return color === COLORS.black ? '♥' : '♡';
    case SUITS.spade:
      return color === COLORS.black ? '♠' : '♤';
    case SUITS.club:
      return color === COLORS.black ? '♣' : '♧';
    default:
      return suit.slice(0, 1);
  }
}

function _buildCardString(array: string[], height: number): string {
  return array
    .map(row => {
      if (height > 0) {
        const prefix = new Array(height + 1).join(row[0]);
        return `${prefix}${row}`;
      } else if (height < 0) {
        const postfix = new Array(Math.abs(height) + 1).join(
          row[row.length - 1]
        );
        return `${row}${postfix}`;
      }
      return row;
    })
    .join('\n');
}

export {
  drawCard,
  drawDeck,
  SUITS,
  COLORS,
  _getSuitIcon,
  _buildCardString,
  drawCards,
};
