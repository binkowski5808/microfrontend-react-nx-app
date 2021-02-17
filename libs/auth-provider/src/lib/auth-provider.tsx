import React from 'react';

export interface LogInfo {
  isLogged: boolean;
}

export const AuthProvider = React.createContext<LogInfo>({ isLogged: false });
