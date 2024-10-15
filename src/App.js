import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';

function App() {
  const props = "holita"

  const links = [{title :"google", href: "www.google.com"}, "reddit", "twitter"]



  return (
    <>
      <NavBar saludo={props} chau="arrivederci" links={links} />
      <ItemListContainer/>
    </>
  );
}

export default App;
