import {BrowserRouter, Router, Route, Routes} from "react-router-dom";
import Book from "./pages/Book";
import Add from "./pages/Add";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Book/>}/>
              <Route path="/add" element={<Add/>}/>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
