import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Categories from "./components/Categories";
import Recommenend from "./components/Recomonded";
import Topics from "./components/Topics";
import Popular from "./components/Popular";
import Slider from "./components/Slider";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Categories></Categories>
      <Slider></Slider>
      <Recommenend></Recommenend>
      <Topics></Topics>
      <Popular></Popular>
      <Footer></Footer>

    </div>
  );
}

export default App