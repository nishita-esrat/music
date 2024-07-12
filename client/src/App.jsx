
import Navber from "./component/shared/navber/Navber";
import Footer from "./component/shared/footer/Footer";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Navber/>
      <Outlet/>
      <Footer/>
    </>
  );
}

export default App;
