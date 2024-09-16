import './App.css';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Education from './pages/Education';
import About from './pages/About';
import Contact from './pages/Contact';
import ProjectHome from './pages/project/ProjectHome';
import Project1 from './pages/project/Project1';
import Project2 from './pages/project/Project2';
import ProjectLayout from './components/project/ProjectLayout';
import PageNotFound from './pages/PageNotFound';
function App() {
  return (
    <div>
      <Routes>
        {/* Main Routes */}
        <Route path='/' element={<Layout />}>
          <Route index path='/' element={<Home />} />
          <Route path='education' element={<Education />} />
          <Route path='contact' element={<Contact />} />
          <Route path='about' element={<About />} />
        </Route>
        {/* Project Routes */}
        <Route path='/projects' element={<ProjectLayout />}>
          <Route index path='/projects' element={<ProjectHome />} />
          <Route path='project1' element={<Project1 />} />
          <Route path='project2' element={<Project2 />} />
        </Route>

        {/* 404 Page not found*/}
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
