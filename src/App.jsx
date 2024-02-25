import { Routes, Route } from "react-router-dom";
import SignUp from "./pages/signup";
import Login from "./pages/login";
import Index from "./pages";
import Profile from "./pages/profile";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/product/:id" element={<Profile />} />
      </Routes>
    </>
  );
}

export default App;
