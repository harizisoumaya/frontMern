import React, { Suspense } from "react";
import { BrowserRouter as Routers, Routes, Route } from "react-router-dom";
import { CartProvider } from "use-shopping-cart";

// eager loaging
import ProtectedRoutes from "./ProtectedRoutes";


import Listarticles from "./components/admin/articles/Listarticles.jsx";
import Listscategorie from "./components/admin/scategories/Listscategories.jsx";
import Listcategories from "./components/admin/categories/Listcategories.jsx";
import Editarticle from "./components/admin/articles/Editarticle.jsx";
import Editcategorie from "./components/admin/categories/Editcategorie.jsx";
import Editscategorie from "./components/admin/scategories/Editscategorie.jsx";
import Menu from "./components/admin/Menu.jsx";
import Home from "./components/admin/Home.jsx";
import Listarticlescard from "./components/client/Listarticlescard.jsx";

import Cart from "./components/client/shopping/Cart.jsx";
import Success from './components/client/shopping/Success'
import Cancel from './components/client/shopping/Cancel'

import Login from './components/authentification/Login'
import Dashboard from './components/admin/Dashboard';
import Logout from './components/authentification/Logout'
import Register from './components/authentification/Register'


/*
// Lazy-loaded components
const Listarticles = React.lazy(() => import("./components/admin/articles/Listarticles"));
const Listscategorie = React.lazy(() => import("./components/admin/scategories/Listscategories"));
const Listcategories = React.lazy(() => import("./components/admin/categories/Listcategories"));
const Editarticle = React.lazy(() => import("./components/admin/articles/Editarticle"));
const Editcategorie = React.lazy(() => import("./components/admin/categories/Editcategorie"));
const Editscategorie = React.lazy(() => import("./components/admin/scategories/Editscategorie"));
const Menu = React.lazy(() => import("./components/admin/Menu"));
const Home = React.lazy(() => import("./components/admin/Home"));
const Listarticlescard = React.lazy(() => import("./components/client/Listarticlescard"));
const Cart = React.lazy(() => import("./components/client/shopping/Cart"));
const Success = React.lazy(() => import("./components/client/shopping/Success"));
const Cancel = React.lazy(() => import("./components/client/shopping/Cancel"));
*/



function App() {
    return (
        <CartProvider>
            <Routers>
                <Suspense fallback={<div>Loading...</div>}>
                    <Menu />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/login" element={<Login/>}/>
                        <Route path="/register" element={<Register/>}/>
                        <Route path="/articles/page/:pageNumber" element={<Listarticlescard />} />

                        <Route element={<ProtectedRoutes/>}>
                                <Route path="/dashboard" element={<Dashboard/>}/>
                                <Route path="/logout" element={<Logout/>}/>
                                <Route path="/articles" element={<Listarticles />} />
                                <Route path="/scategories" element={<Listscategorie />} />
                                <Route path="/categories" element={<Listcategories />} />
                                <Route path="/articles/edit/:id" element={<Editarticle />} />
                                <Route path="/scategories/edit/:id" element={<Editscategorie />} />
                                <Route path="/categories/edit/:id" element={<Editcategorie />} />
                                <Route path="/cart" element={<Cart />} />
                                <Route path="/success" element={<Success />} />
                                <Route path="/cancel" element={<Cancel />} />

                        </Route>
                    </Routes>
                </Suspense>
            </Routers>
        </CartProvider>
    );
}

export default App;