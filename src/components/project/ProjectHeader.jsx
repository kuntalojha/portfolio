import React from 'react';
import { NavLink } from 'react-router-dom';
import { ModeToggle } from '../mode-toggle';
import { Button } from '../ui/button';

const ProjectHeader = () => {
  return (
    <div>
      <div className='text-bold bg-slate-300 dark:bg-slate-600 sticky top-0 z-50'>
        <div className='flex items-center h-20 p-4 justify-between'>
          <div className='text-3xl'>LOGO</div>
          <div className='md:flex space-x-4 hidden'>
            <NavLink
              to='/'
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              HOME
            </NavLink>
            <NavLink
              to='/education'
              className={({ isActive }) => (isActive ? '' : '')}
            >
              EDUCATION
            </NavLink>
            <NavLink
              to='/projects'
              className={({ isActive }) => (isActive ? '' : '')}
            >
              PROJECTS
            </NavLink>
            <NavLink
              to='/contact'
              className={({ isActive }) => (isActive ? ' ' : '')}
            >
              CONTACT
            </NavLink>
            <NavLink
              to='/about'
              className={({ isActive }) => (isActive ? '' : '')}
            >
              ABOUT
            </NavLink>
          </div>
          <div className='flex items-center space-x-4'>
            {/* Ensure Button and ModeToggle have consistent height */}
            <Button variant='outline' className='h-9 px-4'>
              Download CV
            </Button>
            <ModeToggle className='h-10' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectHeader;
