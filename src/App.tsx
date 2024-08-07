import { ModalRoot } from "@pawel-kuznik/react-faceplate";
import { UnitsPage } from './pages/UnitsPage';

import "@pawel-kuznik/react-faceplate/lib/themes/nostalgia-neon/index.css";

function App() {

  return (
    <>
      <ModalRoot>
        <UnitsPage/>
      </ModalRoot>
    </>
  );
}

export default App
