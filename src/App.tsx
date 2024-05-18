import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import { AllRoutesProvider } from "./routing/allRoutes";
import './i18n'
import { ToastContainer } from "react-toastify";
import { useIsRTL } from "./@core/hooks";
import { useEffect } from "react";

function App() {
  const isRTL = useIsRTL();
  useEffect(() => {
    if (isRTL) {
      document.documentElement.lang = "ar";
      document.documentElement.setAttribute("dir", "rtl");
    } else {
      document.documentElement.lang = "en";
      document.documentElement.setAttribute("dir", "ltr");
    }
  }, [isRTL]);

  return (
   <>
    <AllRoutesProvider />
    <ToastContainer rtl={isRTL} />

   </>
  );
}

export default App;
