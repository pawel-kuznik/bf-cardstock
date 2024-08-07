import { useReducer } from "react";
import { Button, FormField, BasicForm } from "@pawel-kuznik/react-faceplate";
import { parseUnitCard } from "../../logic/parseUnitCard";
import { UnitCard } from "../../state";
import { useUnitCardStore } from "../../state/unitCardStore";
import { EditorHeader } from "../EditorHeader";
import { prepareUnitCard } from "../../logic/prepareUnitCard";

export interface UnitCardEditorProps {

    /**
     *  An optional unit card that should be edited instead of making a new one.
     */
    unitCard?: UnitCard;

    /**
     *  A callback to be called when the unit card is stored.
     */
    onStore?: () => void;

    /**
     *  A callback to be called when the user wants to close the editor. 
     */
    onClose?: () => void;
};

function composeUnitCard(state: UnitCard, action: Partial<UnitCard>) : UnitCard {
    return prepareUnitCard({ ...state, ...action });
}

/**
 *  This is a component that can edit a specific unit card. 
 */
export function UnitCardEditor({ unitCard, onStore, onClose }: UnitCardEditorProps) {

    const { store } = useUnitCardStore();

    const [ currentUnitCard, changeUnitCard ] = useReducer(composeUnitCard, { }, () => unitCard || prepareUnitCard({ }));

    const handleSubmit = (data: object) => {

        const unitCard = parseUnitCard(data);
        store(unitCard);

        onStore?.();
    };

    const handleChange = (data: object) => {
        changeUnitCard(data);
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
        <BasicForm onSubmit={handleSubmit} onChange={handleChange}>
            <input type="hidden" name="id" value={currentUnitCard?.id}/>
            <EditorHeader title="Define unit card" controls={controls}/>
            
            <FormField label="Descriptor" name="descriptor" defaultValue={currentUnitCard.descriptor}/>

            <FormField label="English name" name="en.name" defaultValue={currentUnitCard.name.en}/>

            <FormField label="Motivation" name="motivationRating.rating" type="number" min={0} max={6} defaultValue={currentUnitCard.motivationRating.rating}/>
            <FormField label="Morale" name="motivationRating.morale" type="number" min={0} max={6} defaultValue={currentUnitCard.motivationRating.morale}/>
            <FormField label="Remount" name="motivationRating.remount" type="number" min={0} max={6} defaultValue={currentUnitCard.motivationRating.remount}/>

            <FormField label="Skill" name="skillRating.rating" type="number" min={0} max={6} defaultValue={currentUnitCard.skillRating.rating}/>
            <FormField label="Counter attack" name="skillRating.counterAttack" type="number" min={0} max={6} defaultValue={currentUnitCard.skillRating.counterAttack}/>
            <FormField label="Assault" name="skillRating.assault" type="number" min={0} max={6} defaultValue={currentUnitCard.skillRating.assault}/>
        </BasicForm>
    );
};