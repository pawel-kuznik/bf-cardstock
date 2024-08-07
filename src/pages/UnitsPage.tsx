import { UnitCardList } from "../components";
import { Button, useModalControls } from "@pawel-kuznik/react-faceplate";
import { UnitCardEditorDialog } from "../components/UnitCardEditorDialog";

export function UnitsPage() {

    const { show } = useModalControls();

    const handleCreateCard = () => {
        show("create-unit-card", UnitCardEditorDialog, { });    
    };
    

    return (
        <div>
            <Button onClick={handleCreateCard} label={"Create Unit Card"}/>
            <UnitCardList/>
        </div>
    );
};