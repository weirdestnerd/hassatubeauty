import {Route, Routes } from "react-router-dom";
import ComingSoon from "./components/coming_soon/ComingSoon";

const App = () => {
  return (
      <Routes>
        <Route path="/" element={<ComingSoon />} />
      </Routes>
  );
}

export default App;
