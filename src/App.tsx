import { BrowserRouter } from "react-router-dom";

import Routers from "./routers/Routers";

const App = () => {
  return (
    <BrowserRouter>
      <Routers/>
    </BrowserRouter>
  );
}

export default App;
