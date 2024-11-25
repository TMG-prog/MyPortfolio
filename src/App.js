import Header from './Components/Header';
import Body from './Components/Body';
import About from './Components/About';
import Education from './Components/Education';
import Project from './Components/Project';
import Skills from './Components/Skills';
import Footer from './Components/Footer';
import './App.css';


const App = () => {
  return (
    <div id="app" className="App">
        <Header/>
        <Body/>
        <About/>
        <Project/>
        <Education/>
        <Skills/>
        <Footer/>
    </div>
  );
}

export default App;
