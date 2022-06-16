import "./App.css";
import MyCounter from "./Components/MyCounter";
import CounterContextProvider from "./Context/CounterContext";

function App() {
  return (
    <CounterContextProvider>
      <div className="App">
        <h1>Context Api</h1>
        <MyCounter />
      </div>
    </CounterContextProvider>
  );
}

export default App;
