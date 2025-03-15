import './App.css';
// import Accordion from './components/accordion/Accordion';
// import Color from './components/colorCodegenerator/Color';
// import StarRating from './components/StarRating/StarRating';
// import Slider from './Slider/Slider';
// import LoadMoreData from './components/Load_More_Data/LoadMoreData';
// import NestedMenu from './components/NestedMenu/NestedMenu';
// import QrCodeGenerator from './components/QrCodeGenerator/QrCodeGenerator';
// import LightDarkMode from './components/LightDarkMode/LightDarkMode';
// import ScrollIndicator from './components/ScrollIndicator/ScrollIndicator';
import TabsParent from './components/customTabs/TabsParent';
function App() {
  return (
    <div className="App">
    {/* <Accordion/>
    <Color/>
    <StarRating noOfStars={10}/>
    <Slider url="https://picsum.photos/v2/list" page="1" limit="15 "/>
    <LoadMoreData/> */}
    {/* <NestedMenu/> */}
    {/* <QrCodeGenerator/> */}
    {/* <LightDarkMode/> */}
      {/* <ScrollIndicator/> */}
      <TabsParent/>
    </div>
  );
}

export default App;
