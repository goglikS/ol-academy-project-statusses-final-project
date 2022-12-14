import Header from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import { Route, Routes } from "react-router-dom";
import Projects from "./components/Projects/Projects";
import Home from "./components/Home/Home";
import CreateForm from "./components/CreateGroup/CreateForm";
import { clearStorage } from "./components/Utils/utils";

function App() {
  return (
    <div className="App">
      <Header clearStorage={clearStorage} />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/projects" element={<Projects />} />
        <Route path="/create" element={<CreateForm />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
