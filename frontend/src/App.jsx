import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import Contact from "./pages/Contact";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
// import Footer from "./components/Footer";
import Loader from "./utils/Loader";
import Aos from "aos";
// import Doctor from "./components/Doctor";
import "aos/dist/aos.css";
// import Sidebarusers from "./Sidebar/Sidebaruser";
const App = () => {
  const [loader, setloader] = useState(true);
  useEffect(() => {
    Aos.init({ easing: "ease", duration: 700 });
  }, []);
  useEffect(() => {
    setTimeout(() => {
      setloader(false);
    }, 2000);
  });

  return (
    <>
      <div className="">
        {loader ? (
          <Loader />
        ) : (
          <div className="">
            <BrowserRouter>
              <Routes>
                <Route element={<Navbar />}>
                  <Route path="/" element={<Home />} />
                  <Route path="/About" element={<About />} />
                  <Route path="/Contact" element={<Contact />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/Signup" element={<Signup />} />
                </Route>
              </Routes>
            </BrowserRouter>

            {/* <Footer />
            <Sidebarusers /> */}
          </div>
        )}
      </div>
    </>
  );
};

export default App;
