import "./Menu.css";
import { useNavContext } from "../../../context/NavContext";

const Menu = (props) => {
  const { navMenu, navMenuToggler } = useNavContext();
  return (
    <nav className="Menu">
      <i onClick={navMenuToggler} className="fa-solid fa-bars fa-2x"></i>
    </nav>
  );
};

export default Menu;
