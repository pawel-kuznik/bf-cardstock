import { BasicForm, Button, FormField } from "@pawel-kuznik/react-faceplate";
import { Formation, useFormationStore } from "../../state";
import { EditorHeader } from "../EditorHeader";
import { prepareFormation } from "../../logic/prepareFormation";

export interface FormationEditorProps {

    onClose?: () => void;

    onStore?: (formation: Formation) => void;
};

export function FormationEditor({ onStore, onClose }: FormationEditorProps) {

    const { store } = useFormationStore();

    const handleClose = () => {
        onClose?.();
    };

    const handleSubmit = (data: object) => {
    
        const formation = prepareFormation(data);
        store(formation);
        onStore?.(formation);
    };

    const controls = (
        <>
            <Button label="Submit"/>
            {onClose && <Button label="Close" submit={false} onClick={handleClose}/>}
        </>
    );

    return (
        <>
            <BasicForm onSubmit={handleSubmit}>
                <EditorHeader title="Define formation" controls={controls}/>
                <FormField label="Name" name="name"/>
            </BasicForm>
        </>
    );
};