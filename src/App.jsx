import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import NavBar from "./component/navbar";
import Footer from "./component/footer";
import Body from "./component/body";
import Homepage from "./Pages/home";
import About from "./Pages/about";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const [count, setCount] = useState(1);
  const [article, setArticle] = useState({});

  function nextQuote() {
    setCount(count + 1);
  }

  function prevQuote() {
    setCount(count - 1);
  }

  useEffect(() => {
    fetch(`https://dummyjson.com/post/${count}`)
      .then((res) => res.json())
      .then((data) => setArticle(data));
  }, [count]);

  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={
          <>
          <NavBar logo={reactLogo} />
          <Body prevQuote={prevQuote} nextQuote={nextQuote} article={article}/>
          <Footer logo={ viteLogo }/>
          </> 
        } />
        <Route path="*" element={<h1>Page Not Found</h1>} />
        <Route path="/Homepage" element={
           <>
           <NavBar logo={reactLogo} />
           <Homepage/>
           <Footer logo={ viteLogo }/>
           </> 
        } />
        <Route path="/About" element={
           <>
           <NavBar logo={reactLogo} />
           <About/>
           <Footer logo={ viteLogo } class/>
           </> 
        } />
      </Routes>
    </Router>
    </>
  );
}

export default App;
