import React from 'react';
import 'normalize.css';
import AllSuperheroes from '../../containers/AllSuperheroes';
import Header from './Header';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

library.add(faSearch);

export default function App() {
  return (
    <>
    <Header />
    <AllSuperheroes />
    </>
  );
}

