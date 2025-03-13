import './App.css';
/* import Accordion from './components/accordion/Accordion';
import Color from './components/colorCodegenerator/Color';
import StarRating from './components/StarRating/StarRating'; */
import Slider from './Slider/Slider';
function App() {
  return (
    <div className="App">
    {/* <Accordion/>
    <Color/>
    <StarRating noOfStars={10}/> */}
    <Slider url="https://picsum.photos/v2/list" page="1" limit="15 "/>
    </div>
  );
}

export default App;
