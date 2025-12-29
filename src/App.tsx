import "./App.css";
import ScrollToTop from "./hooks/ScrollToTop";
import AllRoutes from "./routes/AllRoutes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <ScrollToTop />
      <ToastContainer />
      <AllRoutes />
    </>
  );
}

export default App;
