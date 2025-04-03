import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainView from "./components/MainView";
import CategoryView from "./components/CategoryView";
import ProductCard from "./components/ProductCard";

function App() {
  const categoryNames = ['Home Appliances', 'TVs', 'Phones']

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<MainView categoryNames={categoryNames}/>} />
          <Route path='/category-view' element={<CategoryView/>} />
          <Route path='/category-view/product-card' element={<ProductCard />} />

        </Routes>
      </Router>
    </>
  );
}

export default App;
