import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Introduce from './pages/Introduce/Introduce';
import Library from './pages/Library/Library';
import News from './pages/News/News';
import Product from './pages/Product/Product';
import Support from './pages/Support/Support';
import Header from './component/Header/Header';
import Footer from './component/Footer/Footer';

function App() {
    return (
        <Router>
            <Header />
            <div className="App">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/introduce" element={<Introduce />} />
                    <Route path="/library" element={<Library />} />
                    <Route path="/news" element={<News />} />
                    <Route path="/product" element={<Product />} />
                    <Route path="/Support" element={<Support />} />
                </Routes>
            </div>
            <Footer />
        </Router>
    );
}

export default App;
