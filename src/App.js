import AddContactForm from "./AddContactForm";
import Header from "./Header";
import { Route, Routes, BrowserRouter, Link } from "react-router-dom"

function App() {
  return (
    <div>
      <BrowserRouter>
        <Link to="/home" >Homepage</Link>
        <Routes>
          <Route path="/home" element={<Header />} ></Route>
          <Route path="/add" element={<AddContactForm />} ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
