import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import NavBar from "./components/NavBar";
import Cart from "./components/Cart";
import { CartContextComp } from "./contexts/CartContextComp";
import Home from "./components/Home";
import Brief from "./components/Brief";
import Footer from "./components/Footer";

function App() {
  return (
    <CartContextComp>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/catalogo" element={<ItemListContainer />} />
          <Route
            exact
            path="/category/:category"
            element={<ItemListContainer />}
          />
          <Route exact path="/item/:id" element={<ItemDetailContainer />} />
          <Route exact path="/cart" element={<Cart />} />
          <Route exact path="/brief" element={<Brief />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </CartContextComp>
  );
}

export default App;
