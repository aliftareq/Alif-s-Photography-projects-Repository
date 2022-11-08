import './App.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './Routers/Routes/Routes';
function App() {
  return (
    <div className="">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
