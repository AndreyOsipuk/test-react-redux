import { FC } from 'react';
import './App.css';
import { Input } from './components/Input/Input';
import { Jokes } from './components/Cards/Cards';
import { RouterProvider,  createHashRouter } from 'react-router-dom';
import { Joke } from './components/Joke/Joke';

const router = createHashRouter([
  {
    path: "/",
    element: <div className="App">
      <Input />
      <Jokes />
    </div>,
  },
  {
    path: "/:id",
    element: <Joke />
  },
]);
export const App: FC = () => {
  return <RouterProvider router={router} />
}

export default App;
