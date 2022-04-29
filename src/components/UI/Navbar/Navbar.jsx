import { useContext } from "react";
import { Link } from "react-router-dom"
import { AuthContext } from "../../../context";
import MyButton from "../button/MyButton";

const Navbar = () => {

  const { isAuth, setIsAuth } = useContext(AuthContext);

  const logOut = () => {
    setIsAuth(false);
    localStorage.removeItem('auth');
  }

  return (

    <div className="navbar">

      <MyButton onClick={logOut}>
        Вийти
      </MyButton>

      <div className="navbar__links">
        <Link className="navbar__link" to="/about" style={{ marginRight: 15 }}>Про сайт</Link>
        <Link className="navbar__link" to="/posts">Пости</Link>
      </div>

    </div>

  );
};

export default Navbar;

