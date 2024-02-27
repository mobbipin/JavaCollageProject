import { Routes, Route } from "react-router-dom";
import SignUp from "./pages/signup";
import Login from "./pages/login";
import Index from "./pages";
import Profile from "./pages/profile";
import AddProduct from "./pages/admin/add-product";
import AllProducts from "./pages/admin/all-products";
import ViewOrder from "./pages/admin/view-order";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/product/:id" element={<Profile />} />
        <Route path="/add-product" element={<AddProduct />} />
        <Route path="/all-product" element={<AllProducts />} />
        <Route path="/view-order" element={<ViewOrder />} />
      </Routes>
    </>
  );
}

export default App;
