const color = {
  mintBlue: "#225ae7",
  lightMintBlue: "#10a9e1",
  yellow: "#d4c331",
  green: "#2cac36",
  red: "#a71717",
  darkRed: "#700707",
  black: "#151516",
  white: "#f1f1f1",
  textDisabled: "#c7c7c7",
};
// #036D86
const tokens = {
  primary: {
    100: "#700707",
    200: "#a71717",
    300: "#2cac36",
    400: "#225ae7",
    500: "#10a9e1",
    600: "#d4c331",
    700: "#7a7a7a",
    800: "#525252",
    900: "#292929",
  },
  text: {
    primary: color.mintBlue,
    secondary: color.green,
    disable: color.textDisabled,
  },
  grey: {
    100: "#f5f5f5",
    200: "#ebebeb",
    300: "#e0e0e0",
    400: "#d6d6d6",
    500: "#cccccc",
    600: "#a3a3a3",
    700: "#7a7a7a",
    800: "#525252",
    900: "#292929",
  },
};
type Mode = {
  set: "light" | "dark";
};

export const themeSettings = (style: Mode) => {
  return {
    palette: {
      mode: style.set,
      ...(style.set === "dark"
        ? {
            primary: {
              ...tokens.primary,
              dark: color.black,
            },
            text: {
              primary: tokens.text.primary,
            },
            grey: {
              ...tokens.grey,
            },
          }
        : {
            primary: {
              ...tokens.primary,
              dark: color.white,
            },
            text: {
              primary: tokens.text.secondary,
            },
            grey: {
              ...tokens.grey,
            },
          }),
    },
  };
};

// <div className={`col-span-1 w-max gap-6 bg-cyan-300 px-40`}>
// <button
//   type="button"
//   onClick={() => dispatch(generate())}
//   className={`my-4 rounded-lg border-2 px-3 py-1 text-2xl hover:border-black hover:text-black`}
// >
//   Generate
// </button>
// <span
//   className={`${flexCenter} min-h-[50px] w-full min-w-[500px] bg-slate-300 text-3xl`}
// >
//   {code}
// </span>
// </div>
