import { useState } from "react";
import { Link } from "react-router-dom";
import {
    BsJustify,
    BsX,
    BsSearch,
    BsPersonFill,
    // BsBoxArrowInRight,
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
                        <Link
                            to="/about"
                            className="list-item-link"
                            onClick={handleCloseMobileMenu}
                        >
                            About
                        </Link>
                    </li>
                    <li className="nav__list__item">
                        <Link
                            to="/faqs"
                            className="list-item-link"
                            onClick={handleCloseMobileMenu}
                        >
                            FAQs
                        </Link>
                    </li>
                    <li className="nav__list__item">
                        <Link
                            to="/contact"
                            className="list-item-link"
                            onClick={handleCloseMobileMenu}
                        >
                            Contact
                        </Link>
                    </li>
                </ul>
                <ul className="nav__link-icons__list">
                    <li className="link-icons__list__item">
                        <Link to="/search" className="list-item-link-icon">
                            <BsSearch size={18} />
                        </Link>
                    </li>
                    {/* <li className="link-icons__list__item">
                        <Link to="/login" className="list-item-link-icon">
                            <BsBoxArrowInRight />
                        </Link>
                    </li> */}
                    <li className="link-icons__list__item">
                        <Link to="/profile" className="list-item-link-icon">
                            <BsPersonFill size={22} />
                        </Link>
                    </li>
                    {/* <li className="link-icons__list__item">
                        <Link
                            to="/admin/dashboard"
                            className="list-item-link-icon"
                        >
                            <BsGearWideConnected />
                        </Link>
                    </li> */}
                    <li className="link-icons__list__item">
                        <Link to="/cart" className="list-item-link-icon">
                            <BsBagFill size={20} />
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
