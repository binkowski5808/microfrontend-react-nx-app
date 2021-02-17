import React from 'react';
import { AuthProvider } from '@microfrontend-react-nx-app/auth-provider';
import Logged from './Logged';

function App() {
  return (
    <div>
      <h1>Context Provider</h1>
      <h2>App 2</h2>
      <AuthProvider.Provider value={{ isLogged: false }}>
        <Logged />
      </AuthProvider.Provider>
    </div>
  );
}

export default App;
