import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Forside from './views/ForsidePage';
import Proces from './views/ProcesPage';
import Services from './views/ServicePage';
import Layout from './Layout';
import Kontakt from './views/KontaktPage';


const router = createBrowserRouter ([
  {
    path:'/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Forside></Forside>,
      },
      {
        path: '/proces',
        element: <Proces></Proces>,
      },
      {
        path: '/services',
        element: <Services></Services>,
      },

      {
        path: '/kontakt',
        element: <Kontakt></Kontakt>
      }

  
    ],
  },
]);





function App () {
  return (
    <RouterProvider router={router}/>

  );
}

export default App;


