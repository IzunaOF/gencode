export interface CodeOptions {
  initial: 'char'|'number'|'special'|'uppercase';
  quantity: {
    letters: number;
    numbers: number;
    special: number;
  };
  includes: {
    letters: boolean;
    numbers: boolean;
    special: boolean;
    only: {
      letters: 'lowercase' | 'uppercase' | 'all';
      others: 'number' | 'special' | boolean
    }
  };
  code: Array<string>;
}

type codeGathering = {
  alfabet: Array<string>;
  special: Array<string>;
  rndNum: (num: number) => number;
  numeric: () => string;
  alfabetIndex: () => number;
  specialIndex: () => number;
};

export const baseValues: codeGathering = {
  alfabet: ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
  ],
  special: ["!", "@", "#", "$", "%", "&", "*", "?"],
  rndNum: (num) => Math.ceil(Math.random() * num),
  numeric: () => Math.ceil(Math.random() * 10).toString(),
  alfabetIndex: () => Math.ceil(Math.random() * 25),
  specialIndex: () => Math.ceil(Math.random() * 7),
};
