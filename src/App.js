import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { fetchCurrencyList } from './asyncActions/currencyLIst';
import AppRouter from './components/AppRouter';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import { changeBase } from './store/reducers/currencySlice';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem('base')) {
      const baseSaved = localStorage.getItem('base');
      dispatch(changeBase(baseSaved));
    }
    dispatch(fetchCurrencyList());
  }, []);

  return (
    <BrowserRouter>
      <Header />
      <AppRouter />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
