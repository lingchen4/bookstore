import './App.css';
import Books from './components/Books';
import Header from './components/Header';
import Popup from './components/Popup';
import {useSelector}  from "react-redux";

function App() {
  const seen = useSelector(state => state.seen)
  return (
    <div className="App">
      {seen? <Popup /> : null}
      <Header />
      <Books />
    </div>
  );
}

export default App;
