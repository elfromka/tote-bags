import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
    BsJustify,
    BsX,
    BsSearch,
    // BsPersonFill,
    BsBoxArrowInRight,
    // BsGearWideConnected,
    BsBagFill,
} from "react-icons/bs";

const Header: React.FC = (): JSX.Element => {
    const [openedState, setOpenedState] = useState<boolean>(false);

    const handleClick = () => setOpenedState((prevState) => !prevState);
    const handleCloseMobileMenu = () => setOpenedState(false);

    return (
        <header className="header">
            <nav className="nav container">
                <Link
                    to="/"
                    className="nav__logo"
                    onClick={handleCloseMobileMenu}
                >
                    <BsBagFill size={20} />
                    <span className="nav__logo__text">TB store</span>
                </Link>
                <span className="nav__toggler" onClick={handleClick}>
                    {openedState ? <BsX size={30} /> : <BsJustify size={30} />}
                </span>
                <ul
                    className={`nav__list ${
                        openedState ? "nav__list-active" : ""
                    } `}
                >
                    <li className="nav__list__item">
                        <NavLink
                            to="/about"
                            className="list-item-link"
                            onClick={handleCloseMobileMenu}
                        >
                            About
                        </NavLink>
                    </li>
                    <li className="nav__list__item">
                        <NavLink
                            to="/faqs"
                            className="list-item-link"
                            onClick={handleCloseMobileMenu}
                        >
                            FAQs
                        </NavLink>
                    </li>
                    <li className="nav__list__item">
                        <NavLink
                            to="/contact"
                            className="list-item-link"
                            onClick={handleCloseMobileMenu}
                        >
                            Contact
                        </NavLink>
                    </li>
                </ul>
                <ul className="nav__link-icons__list">
                    <li className="link-icons__list__item">
                        <NavLink to="/search" className="list-item-link-icon">
                            <BsSearch size={18} />
                        </NavLink>
                    </li>
                    <li className="link-icons__list__item">
                        <NavLink to="/login" className="list-item-link-icon">
                            <BsBoxArrowInRight size={22} />
                        </NavLink>
                    </li>
                    {/* <li className="link-icons__list__item">
                        <NavLink to="/profile" className="list-item-link-icon">
                            <BsPersonFill size={22} />
                        </NavLink>
                    </li> */}
                    {/* <li className="link-icons__list__item">
                        <NavLink
                            to="/admin/dashboard"
                            className="list-item-link-icon"
                        >
                            <BsGearWideConnected />
                        </NavLink>
                    </li> */}
                    <li className="link-icons__list__item">
                        <NavLink to="/cart" className="list-item-link-icon">
                            <BsBagFill size={20} />
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
