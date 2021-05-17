import { BrowserRouter } from "react-router-dom";
import RouterPage from "./pages/Routes";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <RouterPage />
      </div>
    </BrowserRouter>
  );
}

export default App;
