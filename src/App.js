import { Route, Routes } from 'react-router-dom';
import './App.css'
import Home from './components/Home/Home';
import NavBar from './components/NavBar/NavBar';
import Projects from './components/Projects/Projects';
function App() {
  return (
    <div className="App">
     <NavBar/>
     <div>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
