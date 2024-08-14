
import './App.css'
import { Route, Routes } from 'react-router-dom'
import { MainLayout } from './layout/main-layout'
import {Home} from './pages/home/home'
import { Header } from './layout/header'

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<MainLayout/>}>
        <Route index element={<Home/>}/>
      </Route>
    </Routes>
    </>
  )
}

export default App
