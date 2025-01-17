import "./css/App.css";
import Card from "./pages/Card";
import Header from "./pages/Header";

function App() {
  return (
    <div className="App">
      <div className="main_content">
        <div className="header">
          <Header />
        </div>
        <div>
          <Card />
        </div>
      </div>
    </div>
  );
}

export default App;
