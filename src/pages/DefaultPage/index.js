import Container from "components/Container";
import Header from "components/Header";
import Footer from "components/Footer";
import FavoritesProvider from "Context/Favorites";
import { Outlet } from "react-router-dom";

export default function DefaultPage() {
  return (
    <main>
      <Header />
      <FavoritesProvider>
        <Container>
          <Outlet />
        </Container>
      </FavoritesProvider>
      <Footer />
    </main>
  );
}
