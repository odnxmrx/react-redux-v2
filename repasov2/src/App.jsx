import './App.css'
import { Routes, Route } from 'react-router-dom'
import Cards from './components/Cards/Cards'
import Detail from './components/Detail/Detail'
import Nav from './components/Nav/Nav'
import Form from './components/Form/Form'

function App() {

  return (
    <>
    <h1>My WebApp</h1>
    <Nav />
    <Routes>
      <Route path='/home' element={<Cards />} />
      <Route path='/detail/:id' element={<Detail />}/>
      <Route path='/form' element={<Form />} />
    </Routes>
    </>
  )
}

export default App