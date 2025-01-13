
const face: string[] = [
  '┌───────────┐',
  '│{rank}{suit}{spacing}│',
  '│           │',
  '│           │',
  '│     {suit}     │',
  '│           │',
  '│           │',
  '│{spacing}{rank}{suit}│',
  '└───────────┘'
];

const back: string[] = [
  '┌───────────┐',
  '│░░░░░░░░░░░│',
  '│░░░░░░░░░░░│',
  '│░░░░░░░░░░░│',
  '│░░░░░░░░░░░│',
  '│░░░░░░░░░░░│',
  '│░░░░░░░░░░░│',
  '│░░░░░░░░░░░│',
  '└───────────┘'
];

interface AsciiCard {
  face: string[];
  back: string[];
}

const asciiCardTemplate: AsciiCard = {
  face,
  back
};

export default asciiCardTemplate;
