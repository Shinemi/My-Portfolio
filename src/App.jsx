import { Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import Projects from './pages/projects'
import NotFound from './pages/notFound'
import Skills from './pages/skills'
import About from './pages/about'



function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/skills' element={<Skills/>}/>
        <Route path='/projects' element={<Projects/>}/>
        <Route path='/*' element={<NotFound/>}/>
      </Routes>
    </>
  )
}

export default App