import ReactDOM from 'react-dom/client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import App from './App'

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  // <App />
  <QueryClientProvider client={queryClient}>
  <App />
</QueryClientProvider>,
)