import "./App.scss";
import { useState } from "react";
import Loader from "./components/loader/Loader";
import AppRouter from "./components/AppRouter";

function App() {
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 1500);

  if (loading) {
    return (
      <div className="App bg-dark">
        <Loader />
      </div>
    );
  } else {
    return (
      <div className="App">
        <AppRouter />
      </div>
    );
  }
}

export default App;