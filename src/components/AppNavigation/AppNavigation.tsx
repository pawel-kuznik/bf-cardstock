import { Tabs } from "@pawel-kuznik/react-faceplate";
import { useNavigate } from "react-router-dom";

export function AppNavigation() {

    const navigate = useNavigate();

    const handleSelected = (index: number) => {

        switch(index) {
            case 0: navigate("/units"); break;
            case 1: navigate("/formations"); break;
            case 2: navigate("/rules"); break;
            case 3: navigate("/model-types"); break;
        }
    };

    return (
        <Tabs
            layout="vertical"
            tabs={[
                { label: "Unit data cards" },
                { label: "Formations" },
                { label: "Rules" },
                { label: "Model types" }
            ]}

            selectOverrides={{
                color: "blue"
            }}

            onTabChange={handleSelected}
        />
    );
};