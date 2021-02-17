import React from 'react';
import { AuthProvider } from '@microfrontend-react-nx-app/auth-provider';

const Logged = React.lazy(() => import('reactapp1/Logged'));

const App = () => {
  return (
    <div>
      <h1>Context Provider</h1>
      <h2>App 1</h2>
      <AuthProvider.Provider value={{ isLogged: true }}>
        <React.Suspense fallback="Loading status">
          <Logged />
        </React.Suspense>
      </AuthProvider.Provider>
    </div>
  );
};

export default App;
