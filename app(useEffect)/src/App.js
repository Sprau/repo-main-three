import './App.css'
import Header from "./components/Header";
import Footer from "./components/Footer";
import List from "./components/List";
import { useRef } from "react";

function App(){

  let headerRef = useRef(null);
  let footerRef = useRef(null);

  const autoScroll = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return(
    <div>
      <Header autoScroll={autoScroll} ref={{ headerRef, footerRef }}/>
      <List />
      <Footer autoScroll={autoScroll} ref={{ headerRef, footerRef }}/>
    </div>
  )
}

export default App;