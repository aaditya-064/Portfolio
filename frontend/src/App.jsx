import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import Info from "./components/Info";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import UserInfo from "./components/UserInfo";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} Component={() => <HomePage />} />
          <Route path={"/info"} Component={() => <Info />} />
          <Route path={"/contact"} Component={() => <Contact />} />
          <Route path={"/project"} Component={() => <Projects />} />
          <Route
            path={"/private/user/info-aaditya@0129"}
            Component={() => <UserInfo />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
