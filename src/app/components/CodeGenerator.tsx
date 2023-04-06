import { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector, userTheme } from "@/hooks/appHook";
import {
  getCode,
  generate,
  setIncludeLetter,
  setIncludeNumber,
  setIncludeSpecial,
  setOnlyLetterCase,
  IncludeLetterCase,
} from "@/release/generator/generatorSlice";
import { RangeInput } from "./RangeInputs";

const CodeGenerator = () => {
  const code = useAppSelector(getCode);
  const dispatch = useAppDispatch();
  const letterColor:string = userTheme() === "light" ? `text-white` : `text-black`;
  const lettersType = ["all", "lowercase", "uppercase"];
  const [letterCase, setLetterCase] = useState<IncludeLetterCase>("all");

  useEffect(() => {
    dispatch(setOnlyLetterCase(letterCase));
  }, [letterCase]);

  const flexCenter = `flex items-center justify-center`;
  return (
    <section
      id="home"
      className={`options flex flex-col items-center gap-8 bg-transparent pt-44 ${letterColor}`}
    >
      <span className={`${flexCenter} text-5xl`}>Set your own password</span>
      <div
        className={`grid h-full min-w-min grid-cols-10 grid-rows-6 items-center gap-2 p-4`}
      >
        <div className={`${flexCenter} col-span-10 row-span-2 w-full flex-col`}>
          <div
            className={`relative flex h-full w-full items-center justify-end gap-6 pr-12 `}
          >
            <span className={`absolute right-36 w-max text-3xl text-red-10`}>
              {code}
            </span>
            <button
              type="button"
              onClick={() => dispatch(generate())}
              className={`my-4 rounded-lg border-2 bg-light-mintblue px-3 py-1 text-2xl text-white hover:border-black hover:text-black`}
            >
              New
            </button>
          </div>
        </div>
        <div className={`col-span-5 row-span-6`}>
          <RangeInput/>
        </div>
        <div className={`col-span-5 row-span-4`}>
          <span className={`${flexCenter} py-4 text-2xl font-bold`}>
            Include
          </span>
          <div className={`${flexCenter}`}>
            <div className={`item-start flex flex-col gap-2 text-xl`}>
              <div>
                <input
                  type="checkbox"
                  id="include-letters"
                  onChange={(e) => dispatch(setIncludeLetter(e.target.checked))}
                  defaultChecked
                />
                <label htmlFor="include-letters" className={`relative`}>
                  Letters:
                  <select
                    title="letter case"
                    onChange={(e) => {
                      const ev = e.target.value;
                      const i = lettersType.indexOf(ev);
                      setLetterCase(
                        i === 0 ? "all" : i === 1 ? "lowercase" : "uppercase"
                      );
                    }}
                  >
                    {lettersType.map((type) => {
                      return (
                        <option
                          className={`cursor-pointer rounded-lg border border-gray-300 px-3 py-1 hover:border-mint-blue hover:text-mint-blue`}
                          key={type}
                        >
                          {type}
                        </option>
                      );
                    })}
                  </select>
                </label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="include-numbers"
                  onChange={(e) => dispatch(setIncludeNumber(e.target.checked))}
                  defaultChecked
                />
                <label htmlFor="include-numbers">Numbers</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="include-special"
                  onChange={(e) =>
                    dispatch(setIncludeSpecial(e.target.checked))
                  }
                  defaultChecked
                />
                <label htmlFor="include-special">Special chars</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default CodeGenerator;
