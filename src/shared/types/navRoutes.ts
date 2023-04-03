export enum CurrentPage {
  Home = "home",
  HowToUse = "howtouse",
  OtherTypes = "othertypes",
  Vault = "vault",
  FAQ = "faq",
}

export type PageSelector = {
    currentPage: CurrentPage;
    setCurrentPage: (page: CurrentPage) => void;
  };
