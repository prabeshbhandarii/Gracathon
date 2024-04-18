import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Footer from "./components/Footer";
import Loader from "./utils/Loader";
import Aos from "aos";
import Profiledoctor from "./components/Profiledoctor";
import Hospitalblog from "./components/Hospitalblog";
import Sidebarcms from "./Sidebar_cms";
import Adddoctor from "./components/Adddoctor";
import Available1 from "./components/Available1";
// import Doctor from "./components/Doctor";
import "aos/dist/aos.css";
import Layout from "./HOC/Layout";
import UserProfile from "./pages/UserProfile";
import Datadoctor from "./components/Datadoctor";
import FormApp from "./components/FormApp";
import Appointment from "./components/Appointmentpdf";
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
                <Route path="/" element={<Layout />}>
                  <Route index element={<Home />} />
                  <Route path="About" element={<About />} />
                  <Route path="Contact" element={<Contact />} />
                  <Route path="login" element={<Login />} />
                  <Route path="Profile" element={<UserProfile />} />
                  <Route path="Signup" element={<Signup />} />
                  <Route path="Profile" element={<UserProfile />} />
                  <Route path="Profiledoctor" element={<Profiledoctor />} />
                  <Route path="FormApp" element={<FormApp />} />
                  <Route path="Appointment" element={<Appointment />} />
                  <Route path="Hospital/:id" element={<Hospitalblog />} />
                </Route>
                <Route path="/cms" element={<Sidebarcms />}>
                  <Route index element={<Datadoctor />} />
                  <Route path="user" element={<Adddoctor />} />
                  <Route path="kanvan" element={<Available1 />} />
                </Route>
              </Routes>
            </BrowserRouter>

            {/* <Sidebarusers /> */}
          </div>
        )}
      </div>
    </>
  );
};

export default App;
