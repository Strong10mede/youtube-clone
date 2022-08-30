import "./App.css";
import Sidebar from "./Components/Sidebar";
import RecommendVideos from "./Components/RecommendVideos";
import Header from "./Components/Header";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="app__page">
        <Sidebar />
        <RecommendVideos />
      </div>
    </div>
  );
}

export default App;
