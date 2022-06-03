import Convert from '../pages/Convert';
import CurrencyItem from '../pages/CurrencyItem';
import Currency from '../pages/Currency';
import Home from '../pages/Home';

export const routes = [
  {
    path: '/convert',
    element: <Convert />,
    name: 'Converter',
    isInMenu: true,
  },
  {
    path: '/currency',
    element: <Currency />,
    name: 'Currencies',
    isInMenu: true,
  },
  {
    path: '/currency/:id',
    element: <CurrencyItem />,
    name: 'Currency page',
    isInMenu: false,
  },
  {
    path: '/',
    element: <Home />,
    name: 'Home page',
    isInMenu: false,
  },
];
