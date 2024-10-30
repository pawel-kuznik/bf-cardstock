import { Grid, ModalRoot, Page } from "@pawel-kuznik/react-faceplate";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { FormationPage, ModelTypesPage, RulesPage, UnitsPage } from "./pages";
import { AppNavigation } from "./components";

import "@pawel-kuznik/react-faceplate/lib/themes/nostalgia-neon/index.css";

function App() {

    return (
        <BrowserRouter>
            <ModalRoot>
                <Page>
                    <Grid columns={8} rows={1}>
                        <Grid.Cell>
                            <AppNavigation />
                        </Grid.Cell>
                        <Grid.Cell xSpan={7}>
                            <Routes>
                                <Route path="/" element={<UnitsPage />} />
                                <Route path="/units" element={<UnitsPage />} />
                                <Route path="/rules" element={<RulesPage />} />
                                <Route path="/model-types" element={<ModelTypesPage />} />
                                <Route path="/formations" element={<FormationPage />} />
                            </Routes>
                        </Grid.Cell>
                    </Grid>
                </Page>
            </ModalRoot>
        </BrowserRouter>
    );
}

export default App
