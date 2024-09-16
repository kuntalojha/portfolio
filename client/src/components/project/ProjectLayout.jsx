import React from 'react';
import ProjectHeader from './ProjectHeader';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer';

const ProjectLayout = () => {
  return (
    <div>
      <ProjectHeader />
      <Outlet />
      <Footer />
    </div>
  );
}

export default ProjectLayout;
