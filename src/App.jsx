import ItemListContainer from "./components/ItemListContainer";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from "./components/NavBar";
import Home from './components/Home';
import ItemDetailContainer from './components/ItemDetailContainer';
import Footer from "./components/Footer";


function App() {
return (
  <BrowserRouter>
    <NavBar />
    <Routes>
      <Route exact path='/' element={<Home />} />
      <Route exact path='/catalogo' element={<ItemListContainer />} />
      <Route exact path='/category/:category' element={<ItemListContainer />} />
      <Route exact path="/item/:id" element={<ItemDetailContainer />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);
}

export default App
