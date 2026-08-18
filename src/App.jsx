import { Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar'
import Footer from './components/footer'
import Home from './pages/home'
import Projects from './pages/projects'
import Skills from './pages/skills'
import Contact from './pages/contact'
import NotFound from './pages/notFound'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/skills' element={<Skills/>}/>
        <Route path='/projects' element={<Projects/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/*' element={<NotFound/>}/>
      </Routes>
      <Footer />
    </>
  )
}

export default App