import './App.css';
import './components/Card.css';
import './index.css';
import Card from './components/Card.jsx';

function App() {
  const status = false;

  return (
    <div className={status ? 'nezinau' : 'ez'}>
      <Card />
    </div>
  );
}

export default App;
