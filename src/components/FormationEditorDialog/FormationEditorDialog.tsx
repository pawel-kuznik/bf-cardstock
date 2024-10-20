import { DialogFrame } from "@pawel-kuznik/react-faceplate";
import { FormationEditor } from "../FormationEditor/FormationEditor";

export interface FormationEditorDialogProps {

    /**
     *  A callback called when user wants to close the dialog.
     */
    onClose: () => void;
};

export function FormationEditorDialog({ onClose }: FormationEditorDialogProps) {

    const handleStore = () => {
        onClose?.();
    };

    return (
        <DialogFrame title="Define formation" width={800}>
            <FormationEditor onStore={handleStore}/>
        </DialogFrame>
    );
};