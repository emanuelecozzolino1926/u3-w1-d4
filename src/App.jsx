import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavBar from "./components/NavBar";
import Welcome from "./components/Welcome";
import SingleBook from "./components/SingleBook";
import Footer from "./components/Footer";
import Fantasy from "./data/fantasy.json";
import BookList from "./components/BookList";

function App() {
  return (
    <>
      <NavBar />
      <Welcome />
      <BookList book={Fantasy} />
      <Footer />
    </>
  );
}

export default App;
