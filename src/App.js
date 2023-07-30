import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
import './App.css';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import Cart from './pages/Cart/Cart';
import CartRight from './component/CartRight/CartRight';
import PayMent from './pages/PayMent/PayMent';
import Modal from './component/Modal/Modal';
import useModal from './hook/useModal';
import ModalNotion from './component/ModalNotion/ModalNotion';

function App() {
    return (
        <AppProvider>
            <Router>
                <Header />
                <div className="App">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/introduce" element={<Introduce />} />
                        <Route path="/library" element={<Library />} />
                        <Route path="/news" element={<News />} />
                        <Route path="/product" element={<Product />} />
                        <Route path="/support" element={<Support />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/product/:id" element={<ProductDetail toggle={toggle} />} />
                        <Route path="/cart" element={<Cart toggle={toggle} />} />
                        <Route path="/pay" element={<PayMent />} />
                    </Routes>
                </div>
                <Footer />
            </Router>
        </AppProvider>
    );
}

export default App;