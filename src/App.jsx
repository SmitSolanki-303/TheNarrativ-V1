import './App.css'
import Cursor from './components/ui/Cursor';
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useIsMobile } from './components/hooks/UseIsMobile';
import IntroAnimation from './components/layout/IntroAnimation';
import { useMemo, useState } from 'react';

const queryClient = new QueryClient();

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
        <Home />
      )}
    </QueryClientProvider>
  )
}

export default App
