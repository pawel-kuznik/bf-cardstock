import { DialogFrame } from "@pawel-kuznik/react-faceplate";
import { RuleEditor } from "../RuleEditor/RuleEditor";

export interface RuleEditorDialogProps {

    onClose: () => void;
};

export function RuleEditorDialog({ onClose }: RuleEditorDialogProps) {

    const handleStore = () => {
        onClose();
    };

    return (
        <DialogFrame title="Defing rule" onClose={onClose}>
            <RuleEditor onStore={handleStore}/>
        </DialogFrame>
    );
};