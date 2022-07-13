import { Routes, Route } from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getBusinesses } from '../../utilities/businesses-service'

// Components
import Nav from '../../components/Nav/Nav'
import Footer from '../../components/Footer/Footer'
// Pages
import Home from '../Home/Home'
import Login from '../Login/Login'
import SignUp from '../SignUp/SignUp'
import Businesses from '../Businesses/Businesses'
import BusinessDetails from '../BusinessDetails/BusinessDetails'
// CSS
import './App.css';

function App() {
  const [query, setQuery] = useState('')
  const [businesses, setBusinesses] = useState({})

  const handleChange = e => {
    setQuery(e.target.value)
  }

  const navigate = useNavigate()

  const handleSubmit = async e => {
    e.preventDefault()

    try {
      const response = await getBusinesses(`${query}`)
      setBusinesses(response)
      navigate('/businesses')
        .then((res) => {
          console.log(res)
        })
        .catch((err) => {
          console.log(err)
        })
    } catch (e) {
      console.log(e)
    }
    console.log(businesses)

  }




  return (
    <div className="App">
      <Nav handleChange={handleChange} handleSubmit={handleSubmit} query={query} />



      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/businesses' element={<Businesses businesses={businesses}/>} />
        <Route path='/businesses/:id' element={<BusinessDetails />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
