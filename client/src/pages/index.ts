// Importing all page files from pages folder

// No authentication needed pages (non-auth folder)
export { default as About } from "./non-auth/About";
export { default as Contact } from "./non-auth/Contact";
export { default as Faqs } from "./non-auth/Faqs";
export { default as Login } from "./non-auth/Login";
export { default as Search } from "./non-auth/Search";
export { default as Products } from "./non-auth/Products";
export { default as NotFound } from "./non-auth/NotFound";

// Authentication needed pages (auth folder)
// normal user:
export { default as Profile } from "./auth/Profile";
export { default as ShoppingCart } from "./auth/ShoppingCart";

// admin user:
export { default as Dashboard } from "./auth/admin/Dashboard";
