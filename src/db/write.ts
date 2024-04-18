import { writeDb } from './dbFunctions';
import { Survivors, ZodiacSign, Element } from '../types';

const survivors: Survivors[] = [
  {
    contestant: 'Sonja Christopher',
    seasons: 1,
    birthday: new Date(37, 0, 28),
    zodiacSign: ZodiacSign.Aquarius,
    element: Element.Air,
    placements: 16,
    appearances: 1,
  },
  {
    contestant: 'B.B. Andersen',
    seasons: 1,
    birthday: new Date(36, 9, 29),
    zodiacSign: ZodiacSign.Scorpio,
    element: Element.Water,
    placements: 15,
    appearances: 1,
  },
  {
    contestant: 'Stacey Stillman',
    seasons: 1,
    birthday: new Date(72, 7, 11),
    zodiacSign: ZodiacSign.Leo,
    element: Element.Fire,
    placements: 14,
    appearances: 1,
  },
  {
    contestant: 'Ramona Gray',
    seasons: 1,
    birthday: new Date(71, 0, 20),
    zodiacSign: ZodiacSign.Aquarius,
    element: Element.Air,
    placements: 13,
    appearances: 1,
  },
  {
    contestant: 'Dirk Been',
    seasons: 1,
    birthday: new Date(76, 5, 15),
    zodiacSign: ZodiacSign.Gemini,
    element: Element.Air,
    placements: 12,
    appearances: 1,
  },
  {
    contestant: 'Joel Klug',
    seasons: 1,
    birthday: new Date(72, 3, 13),
    zodiacSign: ZodiacSign.Aries,
    element: Element.Fire,
    placements: 11,
    appearances: 1,
  },
  {
    contestant: 'Gretchen Cordy',
    seasons: 1,
    birthday: new Date(62, 1, 7),
    zodiacSign: ZodiacSign.Aquarius,
    element: Element.Air,
    placements: 10,
    appearances: 1,
  },
  {
    contestant: 'Greg Buis',
    seasons: 1,
    birthday: new Date(75, 11, 31),
    zodiacSign: ZodiacSign.Capricorn,
    element: Element.Earth,
    placements: 9,
    appearances: 1,
  },
  {
    contestant: 'Ramona Gray',
    seasons: 1,
    birthday: new Date(77, 6, 16),
    zodiacSign: ZodiacSign.Cancer,
    element: Element.Water,
    placements: 8,
    appearances: 1,
  },
  {
    contestant: 'Gervase Peterson',
    seasons: [1, 27],
    birthday: new Date(69, 10, 2),
    zodiacSign: ZodiacSign.Scorpio,
    element: Element.Water,
    placements: [7, 3],
    appearances: 2,
    runnerUp: true,
  },
  {
    contestant: 'Colleen Haskell',
    seasons: 1,
    birthday: new Date(76, 11, 6),
    zodiacSign: ZodiacSign.Sagittarius,
    element: Element.Fire,
    placements: 6,
    appearances: 1,
  },
  {
    contestant: 'Sean Kenniff',
    seasons: 1,
    birthday: new Date(69, 10, 27),
    zodiacSign: ZodiacSign.Sagittarius,
    element: Element.Fire,
    placements: 5,
    appearances: 1,
  },
  {
    contestant: "Susan 'Sue' Hawk",
    seasons: [1, 8],
    birthday: new Date(61, 7, 17),
    zodiacSign: ZodiacSign.Leo,
    element: Element.Fire,
    placements: [4, 13],
    appearances: 2,
  },
  {
    contestant: 'Rudy Boesch',
    seasons: [1, 8],
    birthday: new Date(28, 0, 20),
    zodiacSign: ZodiacSign.Aquarius,
    element: Element.Air,
    placements: [3, 17],
    appearances: 2,
  },
  {
    contestant: 'Kelly Wiglesworth',
    seasons: [1, 31],
    birthday: new Date(77, 5, 24),
    zodiacSign: ZodiacSign.Cancer,
    element: Element.Water,
    placements: [2, 11],
    appearances: 2,
    runnerUp: true,
  },
  {
    contestant: 'Richard Hatch',
    seasons: [1, 8],
    birthday: new Date(61, 3, 8),
    zodiacSign: ZodiacSign.Aries,
    element: Element.Fire,
    placements: [1, 14],
    appearances: 2,
    winner: true,
  },
  {
    contestant: 'Debb Eaton',
    seasons: 2,
    birthday: new Date(55, 5, 11),
    zodiacSign: ZodiacSign.Gemini,
    element: Element.Air,
    placements: 16,
    appearances: 1,
  },
  {
    contestant: 'Kel Gleason',
    seasons: 2,
    birthday: new Date(68, 0, 5),
    zodiacSign: ZodiacSign.Capricorn,
    element: Element.Earth,
    placements: 15,
    appearances: 1,
  },
  {
    contestant: "Maralyn 'Mad Dog' Hershey",
    seasons: 2,
    birthday: new Date(49, 0, 24),
    zodiacSign: ZodiacSign.Aquarius,
    element: Element.Air,
    placements: 14,
    appearances: 1,
  },
  {
    contestant: 'Mitchell Olson',
    seasons: 2,
    birthday: new Date(77, 2, 17),
    zodiacSign: ZodiacSign.Pisces,
    element: Element.Water,
    placements: 13,
    appearances: 1,
  },
  {
    contestant: 'Kimmi Kappenberg',
    seasons: [2, 31],
    birthday: new Date(72, 10, 11),
    zodiacSign: ZodiacSign.Scorpio,
    element: Element.Water,
    placements: [12, 6],
    appearances: 2,
  },
  {
    contestant: "Michael 'Mike' Skupin",
    seasons: [2, 25],
    birthday: new Date(62, 0, 29),
    zodiacSign: ZodiacSign.Aquarius,
    element: Element.Air,
    placements: [11, 2],
    appearances: 2,
    runnerUp: true,
  },
  {
    contestant: "Jeffrey 'Jeff' Varner",
    seasons: [2, 31, 34],
    birthday: new Date(66, 3, 16),
    zodiacSign: ZodiacSign.Aries,
    element: Element.Fire,
    placements: [10, 17, 14],
    appearances: 3,
  },
  {
    contestant: 'Jerri Manthey',
    seasons: [2, 8, 20],
    birthday: new Date(70, 8, 5),
    zodiacSign: ZodiacSign.Virgo,
    element: Element.Earth,
    placements: [8, 10, 4],
    appearances: 3,
  },
  {
    contestant: 'Nick Brown',
    seasons: 2,
    birthday: new Date(77, 3, 2),
    zodiacSign: ZodiacSign.Aries,
    element: Element.Fire,
    placements: 7,
    appearances: 1,
  },
  {
    contestant: 'Amber (Brkich) Mariano',
    seasons: [2, 8, 40],
    birthday: new Date(78, 7, 11),
    zodiacSign: ZodiacSign.Leo,
    element: Element.Fire,
    placements: [6, 1, 20],
    appearances: 3,
    winner: true,
  },
  {
    contestant: 'Rodger Bingham',
    seasons: 2,
    birthday: new Date(47, 6, 5),
    zodiacSign: ZodiacSign.Cancer,
    element: Element.Water,
    placements: 5,
    appearances: 1,
  },
  {
    contestant: 'Elisabeth Filarski',
    seasons: 2,
    birthday: new Date(77, 4, 28),
    zodiacSign: ZodiacSign.Gemini,
    element: Element.Air,
    placements: 4,
    appearances: 1,
  },
  {
    contestant: 'Keith Famie',
    seasons: 2,
    birthday: new Date(60, 1, 11),
    zodiacSign: ZodiacSign.Aquarius,
    element: Element.Air,
    placements: 3,
    appearances: 1,
  },
  {
    contestant: 'Colby Donaldson',
    seasons: [2, 8, 20],
    birthday: new Date(74, 3, 1),
    zodiacSign: ZodiacSign.Aries,
    element: Element.Fire,
    placements: [2, 12, 5],
    appearances: 3,
    runnerUp: true,
  },
  {
    contestant: 'Tina Wesson',
    seasons: [2, 8, 27],
    birthday: new Date(60, 11, 26),
    zodiacSign: ZodiacSign.Capricorn,
    element: Element.Earth,
    placements: [1, 18, 4],
    appearances: 3,
    winner: true,
  },
];

writeDb(survivors);
