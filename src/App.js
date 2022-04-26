import './App.scss'
import Navbar from './components/Navbar/Navbar'
import Carrousel from './components/Carrousel/Carrousel';
import Paper from './landing/paper/Paper'

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Carrousel />
      <Paper />
    </div>
  );
}

export default App
