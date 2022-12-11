import './App.css';
import Header from './header';
import ImageArea from './imageArea';
import FormArea from './formArea';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="showcase">
        <ImageArea />
        <FormArea />
      </div>
    </div>
  );
}

export default App;
