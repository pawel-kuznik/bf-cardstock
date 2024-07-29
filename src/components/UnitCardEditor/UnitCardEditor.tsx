import { parseUnitCard } from "../../logic/parseUnitCard";
import { useUnitCardStore } from "../../state/unitCardStore";
import { BasicForm } from "../BasicForm";
import { Button } from "../Button";
import { EditorHeader } from "../EditorHeader";
import { FormField } from "../FormField";

export interface UnitCardEditorProps {

    onStore?: () => void;

    onClose?: () => void;
};

/**
 *  This is a component that can edit a specific unit card. 
 */
export function UnitCardEditor({ onStore, onClose }: UnitCardEditorProps) {

    const { store } = useUnitCardStore();

    const handleSubmit = (data: object) => {

        const unitCard = parseUnitCard(data);
        store(unitCard);

        onStore?.();
    };

    const handleClose = () => {

        onClose?.();
    };

    const controls = (
        <>
            <Button label="Submit"/>
            {onClose && <Button label="Close" submit={false} onClick={handleClose} />} 
        </>
    );

    return (
        <BasicForm onSubmit={handleSubmit}>
            <EditorHeader title="Define unit card" controls={controls}/>
            
            <FormField label="Descriptor" name="descriptor"/>

            <FormField label="English name" name="en.name"/>

            <FormField label="Motivation" name="motivationRating.rating" type="number" min={0} max={6}/>
            <FormField label="Morale" name="motivationRating.morale" type="number" min={0} max={6}/>
            <FormField label="Remount" name="motivationRating.remount" type="number" min={0} max={6}/>

            <FormField label="Skill" name="skillRating.rating" type="number" min={0} max={6}/>
            <FormField label="Counter attack" name="skillRating.counterAttack" type="number" min={0} max={6}/>
            <FormField label="Assault" name="motivationRating.assault" type="number" min={0} max={6}/>
        </BasicForm>
    );
};