import { BrowserRouter, Route, Routes } from "react-router-dom";
import Coins from "./routes/Coins";
import Coin from "./routes/Coin";

function Rounter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Coins />}></Route>
        <Route path="/:CoinId/*" element={<Coin />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
//<Route path:"/:CoinId/*" />는 중첩 Router를 받겠다는 말과 동일하다
export default Rounter;
