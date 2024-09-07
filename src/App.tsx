import { Route, Routes } from "react-router-dom";
import MainPage from "./Pages/MainPage/MainPage";
import TheSimsTwo from "./Pages/TheSimsTwo/TheSimsTwo";
import TheSimsThree from "./Pages/TheSimsThree/TheSimsThree";
import TheSimsFour from "./Pages/TheSimsFour/TheSimsFour";
import PageNotFound from "./Pages/PageNotFound/PageNotFound";
import About from "./Pages/About/About";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/the-sims-2" element={<TheSimsTwo />} />
        <Route path="/the-sims-3" element={<TheSimsThree />} />
        <Route path="/the-sims-4" element={<TheSimsFour />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
