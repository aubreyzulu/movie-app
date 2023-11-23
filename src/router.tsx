import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Liked from './pages/Liked';
import Layout from './components/Layout';
import ErrorPage from './pages/Error';

export const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <App />,
      },
      { path: 'liked', element: <Liked /> },
    ],
  },
]);
