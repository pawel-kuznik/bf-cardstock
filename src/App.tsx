import { ModalRoot } from "@pawel-kuznik/react-faceplate";
import { UnitsPage } from './pages/UnitsPage';
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { RulesPage } from "./pages/RulesPage";

import "@pawel-kuznik/react-faceplate/lib/themes/nostalgia-neon/index.css";
import { ModelTypesPage } from "./pages/ModelTypesPage";
import { FormationPage } from "./pages/FormationsPage";

function App() {

  return (
    <>
      <BrowserRouter>
        <ModalRoot>
          <nav>
            <Link to="/units">Unit data cards</Link>
            <Link to="formations">Formations</Link>
            <Link to="/rules">Rules</Link>
            <Link to="/model-types">Model types</Link>
          </nav>
          <Routes>
            <Route path="/" element={<UnitsPage />} />
            <Route path="/units" element={<UnitsPage />} />
            <Route path="/rules" element={<RulesPage />} />
            <Route path="/model-types" element={<ModelTypesPage/>}/>
            <Route path="/formations" element={<FormationPage/>}/>
          </Routes>
        </ModalRoot>
      </BrowserRouter>
    </>
  );
}

export default App
