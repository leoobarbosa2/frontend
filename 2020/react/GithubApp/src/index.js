import React from 'react';
import { View, StatusBar } from 'react-native';

import Routes from './routes';

export default function App() {
  return (
    <>
    <Routes />
    <StatusBar backgroundColor="#ffff" barStyle="dark-content" />
    </>
  );
}

// StatusBar => Barra onde localiza-se hora, porcentagem de bateria etc..
