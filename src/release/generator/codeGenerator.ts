import { CodeOptions, baseValues } from "./codeSettings";

export class Code {
  values;
  counter;
  code: string[];
  size: number[];
  constructor(values: CodeOptions) {
    this.values = values;
    this.counter = {
      letters: 0,
      special: 0,
      numbers: 0,
    };
    this.code = [];
    this.size = [];
  }
  getCode() {
    // All values for code

    const amount = this.values.quantity;
    const only = this.values.includes.only;
    const includes = this.values.includes;
    const counter = this.counter;
    const base = baseValues;

    //Code starts blank
    const code = this.code;

    //Getting the size value to the array;
    this.getSize();
    const size = this.size;

    //Getting the inital value before start looping
    this.getInitial();

    //Building the code
    while (code.length < size[0]) {
      const random = base.rndNum(3);
      switch (only.others) {
        case "number":
          code.push(base.numeric());
          counter.numbers++;
          break;
        case "special":
          code.push(base.special[base.specialIndex()]);
          counter.special++;
          break;
        default: {
          if (
            random <= 1 &&
            counter.letters < amount.letters &&
            includes.letters
          ) {
            const sensitiveCase = base.rndNum(2);
            if (
              sensitiveCase <= 1 &&
              (only.letters === "uppercase" || only.letters === "all")
            ) {
              code.push(base.alfabet[base.alfabetIndex()].toUpperCase());
              counter.letters++;
            } else if (only.letters !== "uppercase") {
              code.push(base.alfabet[base.alfabetIndex()]);
              counter.letters++;
            }
          }
          if (
            random > 1 &&
            random <= 2 &&
            counter.numbers < amount.numbers &&
            includes.numbers
          ) {
            code.push(base.numeric());
            counter.numbers++;
          }
          if (
            random > 2 &&
            random <= 3 &&
            counter.special < amount.special &&
            includes.special
          ) {
            code.push(base.special[base.specialIndex()]);
            counter.special++;
          }
        }
      }
    }
    return code;
  }

  getSize() {
    const amount = this.values.quantity;
    const only = this.values.includes.only;
    const includes = this.values.includes;
    const size = this.size;
    switch (only.others) {
      case "number":
        size[0] = amount.numbers;
        break;
      case "special":
        size[0] = amount.special;
        break;
      default:
        size[0] =
          (includes.letters ? amount.letters : 0) +
          (includes.numbers ? amount.numbers : 0) +
          (includes.special ? amount.special : 0);
    }
    return size;
  }

  getInitial() {
    const init = this.values.initial;
    const counter = this.counter;
    const base = baseValues;
    const code = this.code;

    switch (init) {
      case "char":
        code.push(base.alfabet[base.alfabetIndex()]);
        counter.letters++;
        break;
      case "number":
        code.push(base.numeric());
        counter.numbers++;
        break;
      case "special":
        code.push(base.special[base.specialIndex()]);
        counter.special++;
        break;
      default:
        code.push(base.alfabet[base.alfabetIndex()].toUpperCase());
        counter.letters++;
    }
    return code;
  }
}
