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

function App() {
    const { isShowing, isShowingNotion, toggle } = useModal();
    return (
        <AppProvider>
            <Router>
                <Header />
                <CartRight toggle={toggle} />
                <Modal isShowing={isShowing} hide={toggle} />
                <ModalNotion isShowing={isShowingNotion} hide={toggle} />
                <div className="App">
                    <Routes>
                        <Route path="/" element={<Home toggle={toggle} />} />
                        <Route path="/introduce" element={<Introduce />} />
                        <Route path="/library" element={<Library />} />
                        <Route path="/news" element={<News />} />
                        <Route path="/product" element={<Product toggle={toggle} />} />
                        <Route path="/support" element={<Support />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                </div>
                <Footer />
            </Router>
        </AppProvider>
    );
}

export default App;
