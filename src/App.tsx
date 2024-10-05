import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Layout } from './pages/Layout/Layout'
import { Login } from './pages/auth/Login/Login'
import { Home } from './pages/Home/Home';
import 'material-icons/iconfont/material-icons.css';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />

          <Route element={<Layout></Layout>}>
            <Route path="/home" element={<Home />} />
            {/* <Route path="/perfil" element={<Profile />} />
            <Route path="/salones" element={<Classrooms />} />
            <Route path="/temas/:id" element={<Topics />} />
            <Route path="/cursos" element={<SubjestsRouter />} />
            <Route path="/asistencia" element={<Asistent />} />
            <Route path="/actividades" element={<Activities />} />
            <Route path="/usuarios" element={<Users />} />
            <Route path="/alumnos" element={<Students />} /> */}
          </Route>
        </Routes >
      </BrowserRouter>
      {/* {snackbar} */}
    </>
  )
}

export default App
