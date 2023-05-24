import './App.css';
// Importar estilos globales de Bootstrap (requiere CSS)
import 'bootstrap/dist/css/bootstrap.css';
// Importar estilos globales de Bootstrap (requiere Sass)
import 'bootstrap/scss/bootstrap.scss';

import Header from './components/Header'
import Banner from './components/Banner'
import About from './components/About'
import Habitaciones from './components/Habitaciones'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Header/>
      <Banner/>
      <About/>
      <Habitaciones/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;