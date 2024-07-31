import { UnitCard } from "../../state";
import { DialogFrame } from "../DialogFrame";
import { UnitCardEditor } from "../UnitCardEditor/UnitCardEditor";

export interface UnitCardEditorDialogProps {
    
    /**
     *  An optional unit card that should be edited instead of making a new one.
     */
    unitCard?: UnitCard;

    /**
     *  A callback called when user wants to close the dialog. 
     */
    onClose: () => void;
};

/**
 *  This is a dialog to show the unit card editor. The dialog will show
 *  a form to define a new or existing unit card.
 */
export function UnitCardEditorDialog({ unitCard, onClose }: UnitCardEditorDialogProps) {
    
    const handleStore = () => {

        onClose();
    };
    
    return (
        <DialogFrame>
            <UnitCardEditor unitCard={unitCard} onStore={handleStore} onClose={onClose}/>
        </DialogFrame>
    );
};