import {BrowserRouter, Routes, Route} from "react-router-dom";
import VendingMachine from './VendingMachine';
import Chips from './Chips';
import Soda from './Soda';
import Ramen from './Ramen';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<VendingMachine />}></Route>
        <Route exact path="/chips" element={<Chips />}></Route>
        <Route exact path="/ramen" element={<Ramen />}></Route>
        <Route exact path="/soda" element={<Soda />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
