import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import HomeScreen from "./screens/homeScreen";

function App() {
  return (
    <div>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/home" exact Component={HomeScreen} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
