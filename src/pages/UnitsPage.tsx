import { UnitCardList } from "../components";
import { Button, useModalControls } from "@pawel-kuznik/react-faceplate";
import { UnitCardEditorDialog } from "../components/UnitCardEditorDialog";

/**
 *  This is a page that allows for management of stored unit cards. In essentia,
 *  this is where users would go to search for specific cards, add new ones,
 *  and adjust existing ones.
 * 
 *  The actual list building would be done in a different page. 
 */
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