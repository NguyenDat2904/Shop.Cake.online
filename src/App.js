import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AppProvider } from '~/hook/context';
import Home from './pages/Home/Home';
import Introduce from './pages/Introduce/Introduce';
import Library from './pages/Library/Library';
import News from './pages/News/News';
import Product from './pages/Product/Product';
import Support from './pages/Support/Support';
import Header from './component/Header/Header';
import Footer from './component/Footer/Footer';
import Contact from './pages/Contact/Contact';
import { Compare } from './pages/Compare/compare';
import './App.css';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import Cart from './pages/Cart/Cart';
import CartRight from './component/CartRight/CartRight';
import PayMent from './pages/PayMent/PayMent';
import Modal from './component/Modal/Modal';
import useModal from './hook/useModal';
import ModalNotion from './component/ModalNotion/ModalNotion';
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';
import { useEffect, useState } from 'react';
import Admin from './pages/Admin/Admin';
import AccountManagement from './pages/accountManagement/accountManagement';

function App() {
    const { isShowing, isShowingNotion, toggle } = useModal();
    const [isAdmin, setIsAdmin] = useState(null);
    const [isLogin, setIsLoggedIn] = useState(false);

    const checkAdmin = () => {
        const admin = localStorage.getItem('isAdmin') === 'false' ? false : true;
        const login = localStorage.getItem('isLogin') === 'true' ? true : false;

        setIsLoggedIn(login);
        setIsAdmin(admin);
    };
    useEffect(() => {
        checkAdmin();
    }, []);
    return (
        <Router>
            <AppProvider>
                {isAdmin && <Header setIsLoggedIn={setIsLoggedIn} />}
                <CartRight toggle={toggle} />
                <Modal isShowing={isShowing} hide={toggle} />
                <ModalNotion isShowing={isShowingNotion} hide={toggle} />
                <div className="App">
                    <Routes>
                        <Route path="/" element={<Home toggle={toggle} />} />
                        <Route path="/introduce" element={<Introduce />} />
                        <Route path="/library/*" element={<Library />} />
                        <Route path="/news" element={<News />} />
                        <Route path="/product" element={<Product />} />
                        <Route path="/support/*" element={<Support />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/register" element={isLogin ? <Navigate to="/" /> : <Register />} />
                        <Route
                            path="/login"
                            element={
                                isLogin ? (
                                    <Navigate to="/" />
                                ) : (
                                    <Login setIsLoggedIn={setIsLoggedIn} setIsAdmin={setIsAdmin} />
                                )
                            }
                        />
                        <Route path="/product/:id" element={<ProductDetail toggle={toggle} />} />
                        <Route path="/cart" element={<Cart toggle={toggle} />} />
                        <Route path="/pay" element={<PayMent />} />
                        <Route path="/compare" element={<Compare toggle={toggle} />} />
                        {!isAdmin && (
                            <Route
                                path="/admin/*"
                                element={<Admin setIsLoggedIn={setIsLoggedIn} setIsAdmin={setIsAdmin} />}
                            ></Route>
                        )}
                        <Route path="/profile/*" element={<AccountManagement />} />
                        <Route path="/*" element={<h2>404</h2>} />
                    </Routes>
                </div>
                {isAdmin && <Footer />}
            </AppProvider>
        </Router>
    );
}

export default App;
