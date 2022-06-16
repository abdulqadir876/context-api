import "./App.css";
import MyCounter from "./Components/MyCounter";
import CounterContextProvider from "./Context/CounterContext";
import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Cart from "./Components/Cart";

function App() {
  return (
    <CounterContextProvider>
      <div className="App">
        <Header />
        <div className="w-[70%] mx-auto">
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </div>
      </div>
    </CounterContextProvider>
  );
}

export default App;
