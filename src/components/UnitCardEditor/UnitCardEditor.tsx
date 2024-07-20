import { prepareUnitCard } from "../../logic/prepareUnitCard";
import { useUnitCardStore } from "../../state/unitCardStore";
import { BasicForm } from "../BasicForm";
import { FormField } from "../FormField";

/**
 *  This is a component that can edit a specific unit card. 
 */
export function UnitCardEditor() {

    const { store } = useUnitCardStore();

    const handleSubmit = (data: object) => {

        const unitCard = prepareUnitCard(data);
        store(unitCard);
    };

    return (
        <BasicForm onSubmit={handleSubmit}>
            <button>Submit</button>
            <FormField label="Descriptor" name="descriptor"/>

            <FormField label="Motivation" name="motivationRating.rating" type="number" min={0} max={6}/>
            <FormField label="Morale" name="motivationRating.morale" type="number" min={0} max={6}/>
            <FormField label="Remount" name="motivationRating.remount" type="number" min={0} max={6}/>

            <FormField label="Skill" name="skillRating.rating" type="number" min={0} max={6}/>
            <FormField label="Morale" name="skillRating.counterAttack" type="number" min={0} max={6}/>
            <FormField label="Remount" name="motivationRating.assault" type="number" min={0} max={6}/>
        </BasicForm>
    );
};