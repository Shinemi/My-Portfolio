import { Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar'
import Footer from './components/footer'
import Home from './pages/home'
import About from './pages/about'
import Projects from './pages/projects'
import Skills from './pages/skills'
import NotFound from './pages/notFound'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/skills' element={<Skills/>}/>
        <Route path='/projects' element={<Projects/>}/>
        <Route path='/*' element={<NotFound/>}/>
      </Routes>
      <Footer />
    </>
  )
}

export default App