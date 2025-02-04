import './App.css';
import Header from './componentes/Header/Header';
import Sidebar from './componentes/Sidebar/Sidebar';
import Main from './componentes/Main/Main';
import Footer from './componentes/Footer/Footer';


function App() {
  return (
    <div>
      <Sidebar />
      <Header />
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
