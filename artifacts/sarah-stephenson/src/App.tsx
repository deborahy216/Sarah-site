import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import NotFound from '@/pages/not-found';
import Home from '@/pages/home';
import Bio from '@/pages/bio';
import Bookshelves from '@/pages/bookshelves';
import Socials from '@/pages/socials';
import Portfolio from '@/pages/portfolio';
import Dedication from '@/pages/dedication';
import Contact from '@/pages/contact';
import { Route, Switch, Router as WouterRouter } from 'wouter';

const queryClient = new QueryClient();

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/bio" component={Bio} />
      <Route path="/bookshelves" component={Bookshelves} />
      <Route path="/socials" component={Socials} />
      <Route path="/portfolio" component={Portfolio} />
      <Route path="/dedication" component={Dedication} />
      <Route path="/contact" component={Contact} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
        <Router />
      </WouterRouter>
    </QueryClientProvider>
  );
}

export default App;
