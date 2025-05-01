import './App.css'
import Cursor from './components/ui/Cursor';
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useIsMobile } from './components/hooks/UseIsMobile';

const queryClient = new QueryClient();

function App() {

  const isMobile = useIsMobile()
  return (
    <QueryClientProvider client={queryClient}>
      {!isMobile && <Cursor/>}
      <Home/>
    </QueryClientProvider>
  )
}

export default App
