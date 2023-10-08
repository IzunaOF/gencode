import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CodeOptions } from "./codeSettings";
import { Code } from "./codeGenerator";
import { RootState } from "@/app/store";

export type Inserts = "char" | "number" | "special" | "uppercase";
export type IncludeLetterCase = "lowercase" | "uppercase" | "all";

type IncludeOnly = "number" | "special" | false;
const initialState: CodeOptions = {
  initial: "char",
  quantity: {
    letters: 7,
    numbers: 3,
    special: 1,
  },
  includes: {
    letters: true,
    numbers: true,
    special: true,
    only: {
      letters: "all",
      others: false,
    },
  },
  code: [],
};
const codeGeneratorSlice = createSlice({
  name: "gencode",
  initialState,
  reducers: {
    setInitalValue: (state, action: PayloadAction<Inserts>) => {
      state.initial = action.payload;
    },
    setNumberAmount: (state, action: PayloadAction<number>) => {
      state.quantity.numbers = action.payload;
    },
    setLetterAmount: (state, action: PayloadAction<number>) => {
      state.quantity.letters = action.payload;
    },
    setSpecialAmount: (state, action: PayloadAction<number>) => {
      state.quantity.special = action.payload;
    },
    setIncludeLetter: (state, action: PayloadAction<boolean>) => {
      state.includes.letters = action.payload;
    },
    setIncludeNumber: (state, action: PayloadAction<boolean>) => {
      state.includes.numbers = action.payload;
    },
    setIncludeSpecial: (state, action: PayloadAction<boolean>) => {
      state.includes.special = action.payload;
    },
    setOnlyLetterCase: (state, action: PayloadAction<IncludeLetterCase>) => {
      state.includes.only.letters = action.payload;
    },
    setOnly: (state, action: PayloadAction<IncludeOnly>) => {
      state.includes.only.others = action.payload;
    },
    generate: (state) => {
      state.code = new Code(state).getCode();
    },
  },
});

export const {
  setInitalValue,
  setLetterAmount,
  setNumberAmount,
  setSpecialAmount,
  setIncludeLetter,
  setIncludeNumber,
  setIncludeSpecial,
  setOnlyLetterCase,
  setOnly,
  generate,
} = codeGeneratorSlice.actions;

export const getCode = (state: RootState) => state.codeGenerator.code;

export const codeSettings = (state: RootState) => state.codeGenerator;

export default codeGeneratorSlice.reducer;
