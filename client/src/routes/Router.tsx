import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "../components/Header";
import {
    About,
    Products,
    Contact,
    Faqs,
    Login,
    Search,
    NotFound,
    Profile,
    ShoppingCart,
    Dashboard,
} from "../pages";
import Footer from "../components/Footer";

/**
 * Wrap React components in BrowserRouter from react-router-dom, add routing in the app.
 * @return {JSX.Element} Router wrapper component
 */
const Router = (): JSX.Element => (
    <BrowserRouter>
        <Header />
        <main className="main">
            <div className="container">
                <Routes>
                    <Route path="/" element={<Products />} />
                    <Route path="/search" element={<Search />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/faqs" element={<Faqs />} />
                    <Route path="/login" element={<Login />} />

                    <Route path="/profile" element={<Profile />} />
                    <Route path="/cart" element={<ShoppingCart />} />
                    <Route path="/admin-actions" element={<Dashboard />} />

                    <Route path="*" element={<NotFound />} />
                </Routes>
            </div>
        </main>
        <Footer />
    </BrowserRouter>
);

export default Router;
