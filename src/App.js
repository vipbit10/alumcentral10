import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Container from './Components/Container/Container';
import Alumnipara from './Components/Alumnipara/Alumnipara';
import Footer from './Components/Footer/Footer';
import Slide from './Components/Slide/Slide';

function App() {
  return (
    <div className='vip'>
    <Navbar/>
    <Container/>
    <Alumnipara/>
    <br/><br/><br/><br/><br/><br/>
    <div className='han'><h2></h2></div>
    <Slide/>
    <br/><br/><br/><br/><br/><br/><br/><br/><br/>
    <Footer/>
    </div>
   
  );
}

export default App;
