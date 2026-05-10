import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { Route, Routes } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Company from "./pages/Company";
import Product from "./pages/Product";
import Founder from "./pages/Founder";
import Courses from "./pages/Courses";
import CourseDefault from "./pages/CourseDefault";
import Navigate from "./components/Navigate";

const App = () => {
  return (
    <div className="h-screen bg-black text-white">
      <Navbar />
      <Navigate/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/courses/:id" element={<CourseDefault />} />

        <Route path="/about" element={<About />}>

        <Route path="company" element={<Company />} />
        <Route path="product" element={<Product />} />
        <Route path="ceo" element={<Founder/>} />

        </Route>

        {/* <Route path="/about/company" element={<Company />} />
        <Route path="/about/product" element={<Product />} /> */}

        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
