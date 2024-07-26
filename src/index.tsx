import { Suspense } from "react";
import { createRoot } from 'react-dom/client';
import { App } from './components/App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { LazyAbout } from './pages/About/About.lazy';
import { LazyShop } from "./pages/Shop/Shop.lazy";
// import Shop from "./pages/Shop/Shop";
// import About from "./pages/About/About";

const root = document.getElementById('root');

if(!root) {
  throw new Error('root not found!');
}

const container = createRoot(root);

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: '/about', 
        element: <Suspense fallback={'Loading...'}><LazyAbout /></Suspense>
        // element: <About />

      },
      {
        path: '/shop',
        element: <Suspense fallback={'Loading...'}><LazyShop /></Suspense>
        // element: <Shop />
        // Это было добавлено для эксперимента, чтобы убедиться в увеличении размера общего бандла без lazy подгрузки
      }
    ]
  },
]);

container.render(
  <RouterProvider router={router} />
);