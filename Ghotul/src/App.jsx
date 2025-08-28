
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Nav from "./components/Nav/Nav.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Main from "./components/Main/Main.jsx";
import Login from "./components/Pages/Login.jsx";
import Index from "./components/Pages/Index.jsx";
import About from "./components/Pages/About.jsx";
import Blogs from "./components/Pages/Blogs.jsx";
import Checkout from "./components/Pages/Checkout.jsx";
import Contact from "./components/Pages/Contact.jsx";
import Rooms from "./components/Pages/Rooms.jsx";
import Services from "./components/Pages/Services.jsx";
import MainNav from "./components/MainNav/MainNav.jsx";
import MainFooter from "./components/MainFooter/MainFooter.jsx";
import RoomsDetails from "./components/Pages/RoomsDetails.jsx";

function App() {
  // Initialize login state from localStorage (so login persists after refresh)
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return localStorage.getItem("isLoggedIn") === "true";
  });

  const [showLoginModal, setShowLoginModal] = useState(false);

  // Update login state and persist in localStorage
  const handleLogin = (value) => {
    setIsLoggedIn(value);
    localStorage.setItem("isLoggedIn", value);
  };

  return (
    <Router>
      {/* Navigation */}
      {!isLoggedIn && <MainNav setShowLoginModal={setShowLoginModal} />}
      {isLoggedIn && <Nav />}

      {/* Routes */}
      <Routes>
        {/* Landing page before login */}
        <Route
          path="/"
          element={isLoggedIn ? <Navigate to="/index" /> : <Main setShowLoginModal={setShowLoginModal} />}
        />

        {/* Protected pages */}
        <Route path="/index" element={isLoggedIn ? <Index /> : <Navigate to="/" />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blogs />} />
        <Route path="/checkout/:id" element={isLoggedIn ? <Checkout /> : <Navigate to="/" />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/rooms" element={isLoggedIn ? <Rooms /> : <Navigate to="/" />} />
        <Route path="/room/:id" element={isLoggedIn ? <RoomsDetails /> : <Navigate to="/" />} />
        <Route path="/services" element={<Services />} />
      </Routes>

      {/* Login modal */}
      {showLoginModal && (
        <Login
          setIsLoggedIn={handleLogin} // Updates state and localStorage
          onClose={() => setShowLoginModal(false)}
        />
      )}

      {/* Footer */}
      {!isLoggedIn && <MainFooter setShowLoginModal={setShowLoginModal} />}
      {isLoggedIn && <Footer setIsLoggedIn={handleLogin} />}
    </Router>
  );
}

export default App;
