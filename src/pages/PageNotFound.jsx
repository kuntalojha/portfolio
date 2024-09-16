import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

const PageNotFound = () => {
  return (
    <div>
      <div className='flex items-center justify-center px-2 md:px-0 '>
        <div>
          <p className='text-sm font-semibold text-gray-400 dark:text-white pt-40'>
            404 error!
          </p>
          <h1 className='mt-3 text-2xl font-semibold text-gray-600 md:text-3xl'>
            We can&apos;t find that page
          </h1>
          <p className='mt-4 text-gray-500'>
            Sorry, the page you are looking for doesn&apos;t exist or has been
            moved.
          </p>
          <div className='mt-6 flex items-center space-x-3'>
            <Button onClick={() => window.history.back()}>Go back</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;
