import Createflashcard from "./components/Createflashcard";
import Mycards from "./components/Mycards";
import Navbar from "./components/Navbar";
import Viewcard from "./components/Viewcard";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
       <Navbar />
         <Routes>
          <Route path="/" element={ <Createflashcard />} />

          <Route path="/Mycards" element={<Mycards />} />
          <Route path="/View/Card/:Id" element={<Viewcard />} />
        </Routes>
    
      </BrowserRouter>
    </>
  );
}

export default App;
