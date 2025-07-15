import { Outlet } from "react-router-dom";
import Nav from "./components/nav/Nav";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

const MainLayout = () => {
  return (
    <div className="app">
      <Nav />
      <Outlet />
      <Contact />
      <Footer />
    </div>
  );
};

export default MainLayout;