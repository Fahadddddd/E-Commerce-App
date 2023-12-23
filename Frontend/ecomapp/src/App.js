import './App.css';
import {Routes,Route} from "react-router-dom";
import Home from './components/home';
import Checkout from './components/checkout';
import Explore from './components/Explore';
function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Explore" element={<Explore/>}/>
      <Route path="/checkout" element={<Checkout/>}/>
    </Routes>
    </>
  );
}

export default App;
