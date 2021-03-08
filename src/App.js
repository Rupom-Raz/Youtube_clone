import "./App.css";
import Header from "./components/Header";
import Recommended from "./components/Recommended";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="App">
      {/* Header */}
      <Header />
      {/* Sidebar */}

      <div className="mainSection">
        <Sidebar />
        <Recommended />
      </div>
    </div>
  );
}

export default App;
