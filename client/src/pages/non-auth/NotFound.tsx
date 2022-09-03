import { Link } from "react-router-dom";

/**
 * Rendered when a visitor or an authenticated user is accessing a non-existing route.
 * @return {JSX.Element} with "Go back" link.
 */
const NotFound: React.FC = (): JSX.Element => (
    <div className="not-found">
        <h1 className="not-found__title">404 - Not found</h1>
        <p className="not-found__description">
            The page you requested was not found on this server.
        </p>
        <Link to="/" className="btn">
            Go back to products
        </Link>
    </div>
);

export default NotFound;
