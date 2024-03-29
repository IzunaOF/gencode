import AnchorLink from "react-anchor-link-smooth-scroll";
import { CurrentPage, PageSelector } from "@/shared/types/navRoutes";
import { useAppDispatch, useAppSelector, userTheme } from "@/hooks/appHook";
import { setUserMode } from "@/app/userSlice";
import darkIconTheme from "@/assets/darkIconTheme.svg";
import lightIconTheme from "@/assets/lightIconTheme.svg";

type PageName = {
  page: string;
};

const InnerLink = ({
  page,
  currentPage,
  setCurrentPage,
}: PageName & PageSelector) => {
  const pageToNavigate = page.toLowerCase().replace(/ /g, "") as CurrentPage;

  return (
    <AnchorLink
      className={`px-2 ${
        userTheme() === "light"
          ? currentPage === pageToNavigate
            ? "text-white"
            : "text-light-mintblue"
          : currentPage === pageToNavigate
          ? "text-green-e"
          : "text-mint-blue"
      } `}
      href={`/${pageToNavigate}`}
      onClick={() => setCurrentPage(pageToNavigate)}
    >
      {page}
    </AnchorLink>
  );
};
type ButtonAnchor = {
  children: React.ReactNode;
  setSelectedPage: (value: CurrentPage) => void;
};

const ActionButton = ({ children, setSelectedPage }: ButtonAnchor) => {
  return (
    <AnchorLink
      className={`rounded-md bg-yellow-10 px-2 py-1 text-dark-er`}
      onClick={() => setSelectedPage(CurrentPage.Vault)}
      href={`#${CurrentPage.Vault}`}
    >
      {children}
    </AnchorLink>
  );
};

type Navbar = {
  isOnTop: boolean;
};

const Navbar = ({
  isOnTop,
  currentPage,
  setCurrentPage,
}: Navbar & PageSelector) => {
  const dispatch = useAppDispatch();
  const flexBTW = `flex items-center justify-between`;
  return (
    <nav
      className={`${flexBTW} fixed z-10 w-full ${
        isOnTop ? "bg-transparent" : "bg-slate-500"
      }`}
    >
      <div className={`${flexBTW} h-max w-full px-5 py-[.8rem]`}>
        <div className={`${flexBTW} gap-7`}>
          <span className={`text-1xl text-gray-400`}>Code Generator</span>
        </div>
        <div>
          <div className={`${flexBTW} w-full gap-1 text-[9px]`}>
            <button
              type="button"
              className={`${flexBTW} mr-12 h-6 w-6`}
              onClick={() => dispatch(setUserMode())}
            >
              {userTheme() === "light" ? (
                <img src={darkIconTheme} alt="dark" />
              ) : (
                <img src={lightIconTheme} alt="light" />
              )}
            </button>

            <InnerLink
              page="Home"
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
            <InnerLink
              page="How To Use"
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
            <InnerLink
              page="Other Options"
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
            <InnerLink
              page="FAQ"
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
            <div className={`${flexBTW} pl-14 text-slate-950`}>
              <ActionButton setSelectedPage={setCurrentPage}>
                Go To Vault
              </ActionButton>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
