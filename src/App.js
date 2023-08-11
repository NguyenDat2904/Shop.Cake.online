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
import ModalPayment from './component/ModalPayment/ModalPayment';
import ModalProductCompare from './component/ModalProductCompare/ModalProductCompare';
import ModalNotionCompare from './component/ModalNotionCompare/ModalNotionCompare';
import ModalProductHeart from './component/ModalProductHeart/ModalProductHeart';
import ModalNotionHeart from './component/ModalNotionHeart/ModalNotionHeart';
import ModalContact from './component/ModalContact/ModalContact';
function App() {
    const {
        isShowing,
        isShowingNotion,
        isShowingPayment,
        isShowingCompare,
        isShowingNotionCompare,
        isShowingHeart,
        isShowingNotionHeart,
        isShowingNotionContact,
        toggle,
    } = useModal();
    const [isAdmin, setIsAdmin] = useState(true);
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
                <ModalProductCompare isShowing={isShowingCompare} hide={toggle} />
                <ModalNotionCompare isShowing={isShowingNotionCompare} hide={toggle} />
                <ModalProductHeart isShowing={isShowingHeart} hide={toggle} />
                <ModalNotionHeart isShowing={isShowingNotionHeart} hide={toggle} />
                <ModalContact isShowing={isShowingNotionContact} hide={toggle} />
                <ModalPayment isShowing={isShowingPayment} hide={toggle} />
                <div className="App">
                    <Routes>
                        <Route
                            path="/"
                            element={!isAdmin ? <Navigate to={'/admin/dashboard'} /> : <Home toggle={toggle} />}
                        />
                        <Route path="/introduce" element={<Introduce />} />
                        <Route path="/library/*" element={<Library />} />
                        <Route path="/news/" element={<News />} />
                        <Route path="/product" element={<Product toggle={toggle} />} />
                        <Route path="/support/*" element={<Support />} />
                        <Route path="/contact" element={<Contact toggle={toggle} />} />
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
                        <Route path="/pay" element={<PayMent toggle={toggle} />} />
                        <Route path="/compare" element={<Compare toggle={toggle} />} />
                        <Route
                            path="/admin/*"
                            element={<Admin setIsLoggedIn={setIsLoggedIn} setIsAdmin={setIsAdmin} isLogin={isLogin} />}
                        ></Route>
                        <Route path="/profile/*" element={<AccountManagement toggle={toggle} />} />
                        <Route path="/*" element={<h2>404</h2>} />
                    </Routes>
                </div>
                {isAdmin && <Footer />}
            </AppProvider>
        </Router>
    );
}

export default App;
