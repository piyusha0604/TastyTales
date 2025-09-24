import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import AddRecipe from './components/AddRecipe'
import 'bootstrap/dist/css/bootstrap.min.css'
import ShowRecipe from './components/ShowRecipe'
import UpdateRecipe from './components/UpdateRecipe'


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/add' element={<AddRecipe />} />
        <Route path='/:id' element={ <ShowRecipe /> } />
       <Route path='/update/:id' element={<UpdateRecipe />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
