import { useState } from "react";
import { UnitComposition, UnitCompositionModels } from "../../state";
import { UnitCompositionModelLine } from "./UnitCompositionModelLine";
import { Button } from "@pawel-kuznik/react-faceplate";
import { prepareUnitCompositionModels } from "../../logic/prepareUnitCompositionModels";
import { prepareUnitComposition } from "../../logic/prepareUnitComposition";

export interface UnitCompositionLineProps {
    index: number;
    composition: UnitComposition;
    onChange: (composition: UnitComposition) => void;
};

export function UnitCompositionLine({ composition, onChange }: UnitCompositionLineProps) {

    const [ models, setModels ] = useState<UnitCompositionModels[]>(composition.models);

    const handleAddModels = () => {

        const model = prepareUnitCompositionModels();
        const updatedModels = [ ...models, model ];
        setModels(updatedModels);

        onChange(prepareUnitComposition({ models: updatedModels }));
    };

    const createModelChangeHandler = (idx: number) => {
        return (unitCompositionModels: UnitCompositionModels) => {
            const copy = [ ...models ];
            copy[idx] = unitCompositionModels;
            setModels(copy);

            onChange(prepareUnitComposition({ models: copy }));
        };
    };

    return (
        <div>
            <Button label="Add models" onClick={handleAddModels}/>
            {models.map((m, idx) => (<UnitCompositionModelLine key={idx} model={m} onChange={createModelChangeHandler(idx)}/>))}
        </div>
    );
};
