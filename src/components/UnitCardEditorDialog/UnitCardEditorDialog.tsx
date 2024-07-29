import { DialogFrame } from "../DialogFrame";
import { UnitCardEditor } from "../UnitCardEditor/UnitCardEditor";

export interface UnitCardEditorDialogProps {
    onClose: () => void;
};

/**
 *  This is a dialog to show the unit card editor. The dialog will show
 *  a form to define a new or existing unit card.
 */
export function UnitCardEditorDialog({ onClose }: UnitCardEditorDialogProps) {
    
    const handleStore = () => {

        onClose();
    };
    
    return (
        <DialogFrame>
            <UnitCardEditor onStore={handleStore} onClose={onClose}/>
        </DialogFrame>
    );
};