import "./App.css";
import Header from "./pages/Header";
import Content from "./pages/Content";

function App() {
  return (
    <div className="App">
      <div className="main_content">
        <div className="header">
          <Header />
        </div>
        <div className="content">
          <Content />
        </div>
      </div>
    </div>
  );
}

export default App;
