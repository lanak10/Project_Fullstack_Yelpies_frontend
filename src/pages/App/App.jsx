import { Routes, Route } from 'react-router-dom'
// Components
import Nav from '../../components/Nav/Nav'
import Footer from '../../components/Footer/Footer'
// Pages
import Home from '../Home/Home'
import Login from '../Login/Login'
import SignUp from '../SignUp/SignUp'
// CSS
import './App.css';

function App() {
  return (
    <div className="App">
      <Nav/>

      <Routes>
        <Route path='/' element={ <Home/> }/>
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
      </Routes>

      <Footer/>
    </div>
  );
}

export default App;
