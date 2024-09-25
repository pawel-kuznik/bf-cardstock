import { DialogFrame } from "@pawel-kuznik/react-faceplate";
import { ModelTypeEditor } from "../ModelTypeEditor/ModelTypeEditor";

export interface ModelTypeEditorDialogProps {

    /**
     *  A callback called when user wants to close the dialog.
     */
    onClose: () => void;
};

/**
 *  This is a dialog to show an editor for the model type. The dialog
 *  will close when the users wishes or when a model type is stored.
 */
export function ModelTypeEditorDialog({ onClose }: ModelTypeEditorDialogProps) {

    const handleStore = () => {

        onClose();
    };

    return (
        <DialogFrame title="Define model type" width={800}>
            <ModelTypeEditor onStore={handleStore} onClose={onClose}/>
        </DialogFrame>
    );
};