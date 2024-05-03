import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import LeftComponent from './components/LeftComponent';
import LeftBottomBar from './components/LeftBottomBar';
import LeftCard from './components/LeftCard';
import MainCard from './components/MainCard';
import CardsBar from './components/CardsBar';

function App() {
  return (
    <>
    <div className='bg-black  flex flex-row justify-between h-[100vh]'>

      <div className='w-[28%] sticky'>
    <LeftComponent/>
    <LeftBottomBar/>
      </div>

      <div className='w-[71.5%]'>
        <Navbar/>
        <div className=' h-[550px]'>

        <CardsBar/>
        <CardsBar/>
        <CardsBar/>
        <CardsBar/>
        <CardsBar/>
        <CardsBar/>
 
        </div>
      </div>
    </div>
    </>
  );
}

export default App;

