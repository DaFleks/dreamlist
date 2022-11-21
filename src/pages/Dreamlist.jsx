import "./Dreamlist.css";
import NavMenu from "./NavMenu";
import { useNavContext } from "../context/NavContext";
import Header from "../components/Dreamlist/Header/Header";
import Main from "../components/Dreamlist/Main/Main";
import Footer from "../components/Dreamlist/Footer/Footer";
import { useEffect } from "react";

const Dreamlist = (props) => {
  const { navMenu, navMenuToggler } = useNavContext();

  useEffect(() => {
    if (navMenu)
    navMenuToggler();
  }, []);


  return (
    <div className="Dreamlist">
      <NavMenu />
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default Dreamlist;
