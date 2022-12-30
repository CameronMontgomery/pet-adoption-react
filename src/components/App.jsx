import { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import SearchParams from './SearchParams';
import Details from './Details';
import AdoptedPetContext from './AdoptedPetContext';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
});

const App = () => {
  const adoptedPet = useState(null);
  return (
    <div
      className='top-0 m-0 min-h-screen overflow-x-scroll pt-2'
      style={{
        background: 'url(http://pets-images.dev-apis.com/pets/wallpaperB.jpg)',
      }}
    >
      <div className=' mx-auto max-w-screen-xl'>
        <BrowserRouter>
          <QueryClientProvider client={queryClient}>
            <AdoptedPetContext.Provider value={adoptedPet}>
              <header className='mx-auto mb-5 flex w-11/12 justify-center rounded-lg border-r-2 bg-gradient-to-b from-blue-300 via-blue-500 to-blue-700 p-7 text-center'>
                <Link
                  className='text-5xl text-white subpixel-antialiased hover:text-gray-200'
                  to='/'
                >
                  Adopt Me!
                </Link>
              </header>
              <div>
                <Routes>
                  <Route path='/details/:id' element={<Details />} />
                  <Route path='/' element={<SearchParams />} />
                </Routes>
              </div>
            </AdoptedPetContext.Provider>
          </QueryClientProvider>
        </BrowserRouter>
      </div>
    </div>
  );
};

export default App;
