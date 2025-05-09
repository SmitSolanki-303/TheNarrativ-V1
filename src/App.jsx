import React,{ Suspense, lazy ,useMemo, useState } from 'react';
import './App.css'
import Cursor from './components/ui/Cursor';
import NotFound from './pages/NotFound'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useIsMobile } from './components/hooks/UseIsMobile';
import IntroAnimation from './components/layout/IntroAnimation';

const queryClient = new QueryClient();

// lazy loading the Home components
const Home = React.lazy(() => import('./pages/Home'));

function App() {

  const isMobile = useIsMobile();
  const [isIntroDone, setIsIntroDone] = useState(false);

  const queryClient = useMemo(() => new QueryClient(), []);

  return (
    <QueryClientProvider client={queryClient}>
      {!isMobile && <Cursor/>}
      {!isIntroDone ? (
        <IntroAnimation onFinish={() => setIsIntroDone(true)} />
      ) : (
        <Suspense fallback={<div className="w-full h-screen bg-black"></div>}>
          <Home/>
        </Suspense>
      )}
    </QueryClientProvider>
  )
}

export default App
