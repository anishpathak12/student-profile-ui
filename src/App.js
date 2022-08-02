import './App.css';
import Details from './components/Details';
import Footer from './components/Footer';
import Navbar from './components/navbar';
import Profile from './components/profile';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Profile />
      <Details />
      <Footer />
    </div>
  );
}

export default App;
