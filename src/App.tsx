import { Route, Routes } from "react-router-dom";
import MainPage from "./MainPage/MainPage";
import TheSimsTwo from "./TheSimsTwo/TheSimsTwo";
import TheSimsThree from "./TheSimsThree/TheSimsThree";
import TheSimsFour from "./TheSimsFour/TheSimsFour";
import PageNotFound from "./PageNotFound/PageNotFound";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/the-sims-2" element={<TheSimsTwo />} />
        <Route path="/the-sims-3" element={<TheSimsThree />} />
        <Route path="/the-sims-4" element={<TheSimsFour />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
