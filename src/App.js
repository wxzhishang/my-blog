import { useRoutes } from 'react-router-dom';
import Routes from './router/router'
import './App.css';

function App() {
  const element = useRoutes(Routes);
  return (
    <div>
      {element}
    </div>
  );
}

export default App;
