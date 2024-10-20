import { Button, useModalControls } from "@pawel-kuznik/react-faceplate";
import { FormationEditorDialog } from "../components/FormationEditorDialog";
import { FormationsList } from "../components/FormationsList/FormationsList";

export function FormationPage() {
    
    const { show } = useModalControls();

    const handleCreate = () => {

        show("create-new-formation", FormationEditorDialog, { });
    };
    
    return (
        <div>
            <Button label="Create" onClick={handleCreate}/>
            <FormationsList/>
        </div>
    );
};