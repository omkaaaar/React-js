import "./App.css";
import Counter from "./Components/counter/Counter";
import ImageSlider from "./Components/image-slider/ImageSlider";
import RandomColor from "./Components/RandomColor";
import StarRating from "./Components/star-rating/StarRating";

function App() {
  return (
    <>
      <RandomColor />
      <StarRating />
      <ImageSlider />
      <Counter />
    </>
  );
}

export default App;
