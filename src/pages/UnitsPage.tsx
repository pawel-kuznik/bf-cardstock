import { Button, UnitCardList } from "../components";
import { useModalControls } from "../components/Modal/useModalControls";
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