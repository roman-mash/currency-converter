import Convert from '../pages/Convert';
import CurrencyItem from '../pages/CurrencyItem';
import Currency from '../pages/Currency';

export const routes = [
  { path: '/convert', element: <Convert />, name: 'Converter', isInMenu: true },
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
];
