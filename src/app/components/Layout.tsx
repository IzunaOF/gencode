import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { CurrentPage, PageSelector } from "@/shared/types/navRoutes";
import { Outlet } from "react-router-dom";
import { getTheme } from "../userSlice";
import { useAppSelector } from "@/hooks/appHook";

const Layout = ({ currentPage, setCurrentPage }: PageSelector) => {
  const theme = useAppSelector(getTheme);

  const [mobileMenu, setMobileMenu] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setMobileMenu(true);
        setCurrentPage(CurrentPage.Home);
      }
      if (window.scrollY > 50) setMobileMenu(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`${theme === "light" ? "bg-dark-er" : "bg-slate-100"}`}>
      <Navbar
        isOnTop={mobileMenu}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
      <Outlet />
    </div>
  );
};

export default Layout;
