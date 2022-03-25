
import './App.css';
import BookContainer from './components/BookContainer/BookContainer';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <BookContainer></BookContainer>
      <Footer></Footer>
    </div>
  );
}

export default App;
