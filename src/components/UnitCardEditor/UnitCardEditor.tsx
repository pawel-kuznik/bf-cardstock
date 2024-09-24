import { useReducer, useState } from "react";
import { Button, FormField, BasicForm, Grid } from "@pawel-kuznik/react-faceplate";
import { parseUnitCard } from "../../logic/parseUnitCard";
import { UnitCard, UnitCardVariant } from "../../state";
import { useUnitCardStore } from "../../state/unitCardStore";
import { EditorHeader } from "../EditorHeader";
import { prepareUnitCard } from "../../logic/prepareUnitCard";
import { prepareUnitVariant } from "../../logic/prepareUnitVariant";
import { UnitVariantLine } from "./UnitVariantLine";

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

    const [ currentUnitCard, changeUnitCard ] = useReducer(composeUnitCard, { }, (input: Partial<UnitCard>) => unitCard || prepareUnitCard(input));
    const [ variants, setVariants ] = useState<UnitCardVariant[]>(currentUnitCard.variants);

    const handleSubmit = (data: object) => {

        const payload = parseUnitCard(data);
        payload.variants = variants;
        store(payload);
        onStore?.();
    };

    const handleClose = () => {

        onClose?.();
    };

    const handleAddVariant = () => {

        const variant = prepareUnitVariant();
        setVariants([...variants, variant]);
    };

    const handleRemoveVariant = (index: number, variant: UnitCardVariant) => {

        const filteredVariants = variants.filter(v => v !== variant);
        setVariants(filteredVariants);
    };

    const handleChangeVariant = (index: number, variant: UnitCardVariant) => {

        variants[index] = variant;
        setVariants(variants);
    };

    const controls = (
        <>
            <Button label="Submit"/>
            {onClose && <Button label="Close" submit={false} onClick={handleClose} />} 
        </>
    );

    return (
        <>
            <BasicForm onSubmit={handleSubmit}>
                <input type="hidden" name="id" value={currentUnitCard?.id}/>
                <EditorHeader title="Define unit card" controls={controls}/>
                
                <FormField label="Descriptor" name="descriptor" defaultValue={currentUnitCard.descriptor}/>

                <FormField label="English name" name="en.name" defaultValue={currentUnitCard.name.en}/>
                <Grid columns={3} rows={1}>
                    <FormField label="Motivation" name="motivationRating.rating" type="number" min={0} max={6} defaultValue={currentUnitCard.motivationRating.rating}/>
                    <FormField label="Morale" name="motivationRating.morale" type="number" min={0} max={6} defaultValue={currentUnitCard.motivationRating.morale}/>
                    <FormField label="Remount" name="motivationRating.remount" type="number" min={0} max={6} defaultValue={currentUnitCard.motivationRating.remount}/>
                </Grid>
                <Grid columns={3} rows={1}>
                    <FormField label="Skill" name="skillRating.rating" type="number" min={0} max={6} defaultValue={currentUnitCard.skillRating.rating}/>
                    <FormField label="Counter attack" name="skillRating.counterAttack" type="number" min={0} max={6} defaultValue={currentUnitCard.skillRating.counterAttack}/>
                    <FormField label="Assault" name="skillRating.assault" type="number" min={0} max={6} defaultValue={currentUnitCard.skillRating.assault}/>
                </Grid>
            </BasicForm>
            <Button submit={false} label="Add variant" onClick={handleAddVariant}/>
            {variants.map((v, idx) => (
                <UnitVariantLine key={idx} variant={v} index={idx} onRemove={handleRemoveVariant} onChange={handleChangeVariant}/>
            ))}
        </>
    );
};