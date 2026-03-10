import React, { Suspense, lazy } from 'react';

const Hero = lazy(() => import('./components/Hero'));
const Events = lazy(() => import('./components/Events'));
const Games = lazy(() => import('./components/Games'));

function App() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Hero />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <Events />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <Games />
      </Suspense>
    </div>
  );
}

export default App;