import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Favorites from "pages/Favorites";
import Header from "components/Header";
import Footer from "components/Footer";
import Container from "components/Container";
import FavoritesProvider from "Context/Favorites";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Header />
      <Container>
        <FavoritesProvider>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/favorites" element={<Favorites />}></Route>
          </Routes>
        </FavoritesProvider>
      </Container>
      <Footer />
    </BrowserRouter>
  );
}
