import { BasicForm, Button, FormField } from "@pawel-kuznik/react-faceplate";
import { EditorHeader } from "../EditorHeader";
import { ModelType, useModelTypeStore } from "../../state";
import { prepareModelType } from "../../logic/prepareModelType";

export interface ModelTypeEditorProps {

    /**
     *  A callback to be called when a new model type is created.
     */
    onStore?: (modelType: ModelType) => void;

    /**
     *  A callback to be called wwhen the user wants to close the editor.
     */
    onClose?: () => void;
};

/**
 *  An editor to define a model type.
 */
export function ModelTypeEditor({ onStore, onClose }: ModelTypeEditorProps) {

    const { store } = useModelTypeStore();

    const handleClose = () => {
        onClose?.();
    };

    const handleSubmit = (data: object) => {

        const modelType = prepareModelType(data);
        store(modelType);
        onStore?.(modelType);
    };

    const controls = (
        <>
            <Button label="Submit"/>
            {onClose && <Button label="Close" submit={false} onClick={handleClose}/>}
        </>
    );

    return (
        <BasicForm onSubmit={handleSubmit}>
            <EditorHeader title="Define model type" controls={controls}/>
            <FormField label="Model name" name="name"/>
        </BasicForm>
    );
};
