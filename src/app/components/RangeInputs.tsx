import { useAppSelector, useAppDispatch, userTheme } from "@/hooks/appHook";
import { RootState } from "../store";
import {
  setLetterAmount,
  setNumberAmount,
  setSpecialAmount,
  generate,
  codeSettings,
} from "@/release/generator/generatorSlice";

type RangeInput = {
  onChangeValue: RootState;
  onChangeRange: (e: Node) => void;
  style: string;
  min: number;
  max: number;
  id: string;
  rangeId: string;
  value: number;
  rangeValue: number;
};
export const RangeInput = () => {
  const letterColor:string = userTheme() === "light" ? `text-white` : `text-black`;
  const flexCenter = `flex items-center justify-center relative`;
  const styledInputs = `w-12 mr-3 pt-4 text-right bg-transparent text-black text-4xl`;
  const dispatch = useAppDispatch();
  const settings = useAppSelector(codeSettings);

  return <div className={`flex justify-center flex-col`}>
      <div className={`flex text-amber-800 py-10 flex-col gap-4`}>
        <div className={`${flexCenter}`} onMouseUp={() => dispatch(generate())}>
          <input
            className={`${styledInputs} ${letterColor}`}
            type="number"
            id="qtd-letters"
            value={settings.quantity.letters}
            placeholder="0"
            max={25}
            onChange={(e) => dispatch(setLetterAmount(Number(e.target.value)))}
          />
          <div className={`flex flex-col gap-2`}>
            <label htmlFor="qtd-letters">Letters</label>
            <input
              type="range"
              id="range-letter"
              title="letter"
              value={Math.ceil(settings.quantity.letters * 4)}
              onChange={(e) =>
                dispatch(setLetterAmount(Math.ceil(Number(e.target.value) / 4)))
              }
            />
          </div>
        </div>
        <div className={`${flexCenter}`} onMouseUp={() => dispatch(generate())}>
          <input
            className={`${styledInputs} ${letterColor}`}
            type="number"
            id="qtd-numbers"
            placeholder="0"
            min={0}
            max={20}
            value={settings.quantity.numbers}
            onChange={(e) => dispatch(setNumberAmount(Number(e.target.value)))}
          />
          <div className={`flex flex-col gap-2`}>
            <label htmlFor="qtd-numbers">Numbers</label>
            <input
              type="range"
              id="range-numbers"
              title="numbers"
              value={Math.ceil(settings.quantity.numbers * 5)}
              onChange={(e) =>
                dispatch(setNumberAmount(Math.ceil(Number(e.target.value) / 5)))
              }
            />
          </div>
        </div>
        <div className={`${flexCenter}`} onMouseUp={() => dispatch(generate())}>
          <input
            className={`${styledInputs} ${letterColor}`}
            type="number"
            id="qtd-special"
            placeholder="0"
            min={0}
            max={10}
            value={settings.quantity.special}
            onChange={(e) => dispatch(setSpecialAmount(Number(e.target.value)))}
          />
          <div className={`flex flex-col gap-2`}>
            <label htmlFor="qtd-special">Special chars</label>
            <input
              type="range"
              id="range-special"
              title="special characters"
              min={0}
              value={Math.ceil(settings.quantity.special * 10)}
              onChange={(e) =>
                dispatch(
                  setSpecialAmount(Math.ceil(Number(e.target.value) / 10))
                )
              }
            />
          </div>
        </div>
      </div>
    </div>
};
