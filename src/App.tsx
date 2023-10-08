import { useState } from "react";
import CodeGenerator from "./app/components/CodeGenerator";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Layout from "./app/components/Layout";
import { userTheme, useAppSelector } from "./hooks/appHook";

import { CurrentPage } from "./shared/types/navRoutes";


function App() {
  // const theme = useMemo(
  //   () => createTheme(themeSettings({ set: type })),
  //   [{ set: type }]
  // );
  const [currentPage, setCurrentPage] = useState<CurrentPage>(CurrentPage.Home);
  return (
    <main
      className={`app ${
        userTheme() === "light" ? "bg-dark-er" : "bg-slate-100"
      }`}
    >
      <BrowserRouter>
        <Routes>
          <Route
            element={
              <Layout
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
              />
            }
          >
            <Route path="/" element={<Navigate to={`/gencode`} replace />} />
            <Route path="/gencode" element={<CodeGenerator />}></Route>
            
          </Route>
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
