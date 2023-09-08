/* eslint-disable react/react-in-jsx-scope */
import './App.css'
import {  Route, Routes } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import Navbar from './components/Navbar/Navbar'
import { getGames, getGenres } from './redux/actions'
import LandingPage from './components/LandingPage/LandingPage'
import Detail from './components/Detail/Detail'
import Form from './components/Form/Form'
import Cards from './components/Cards/Cards'
import About from './components/About/About'
import NotFound from './components/NotFound/NotFound'

function App () {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getGames())
    dispatch(getGenres())
  }, [dispatch])
  return (
     
    <div className="App">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<LandingPage/>}/>
          <Route exact path="/home" element={<Cards/>}/> 
          <Route exact path="/detail/:id" element={<Detail/>}/>
          <Route exact path="/create" element={<Form/>}/>
          <Route exact path="/about" element={<About/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
    </div>
 
  )
}

export default App
