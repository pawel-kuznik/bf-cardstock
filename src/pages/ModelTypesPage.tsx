import { Button, useModalControls } from "@pawel-kuznik/react-faceplate";
import { ModelTypeEditorDialog, ModelTypeList } from "../components";

/**
 *  This is a page that displays all stored model types. These types
 *  describe a what specific model can be played. Each collection model
 *  has a list of model types it can be played as and each unit card
 *  has a list of model types needed to field a unit.
 */
export function ModelTypesPage() {

    const { show } = useModalControls();

    const handleCreate = () => {

        show("create-new-model-type", ModelTypeEditorDialog, { });
    };

    return (
        <div>
            <Button label="Create" onClick={handleCreate}/>
            <ModelTypeList/>
        </div>
    );
};
