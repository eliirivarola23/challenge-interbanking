import { Suspense, lazy } from 'react';
import { SnackbarProvider } from 'notistack';
import { SnackbarUtilitiesConfigutator } from './helpers/snackbar-manager';
import { BrowserRouter, Route } from 'react-router-dom';
import RoutesWithNotFound from './components/NotFound/RoutesWithNotFound';
import { PublicRoutes } from './models/routes';
import Message from './components/Message';
import HeaderWithSearch from './components/HeaderWithSearch';
import { ErrorBoundary } from './components/ErrorBoundary/ErrorBoundary';

function App() {
  const Home = lazy(() => import('./pages/Home'));

  return (
    <Suspense fallback={<Message />}>
      <ErrorBoundary>
        <SnackbarProvider>
          <SnackbarUtilitiesConfigutator />
          <BrowserRouter>
            <HeaderWithSearch />
            <RoutesWithNotFound>
              <Route index path={PublicRoutes.HOME} element={<Home />} />
            </RoutesWithNotFound>
          </BrowserRouter>
        </SnackbarProvider>
      </ErrorBoundary>
    </Suspense>
  );
}

export default App;
