import { useState } from "react";
import { UnitComposition, UnitCompositionModels } from "../../state";
import { UnitCompositionModelLine } from "./UnitCompositionModelLine";
import { Button } from "@pawel-kuznik/react-faceplate";
import { prepareUnitCompositionModels } from "../../logic/prepareUnitCompositionModels";

export interface UnitCompositionLineProps {
    index: number;
    composition: UnitComposition;
};

export function UnitCompositionLine({ index, composition }: UnitCompositionLineProps) {

    const [ models, setModels ] = useState<UnitCompositionModels[]>([]);

    const handleAddModels = () => {

        const model = prepareUnitCompositionModels();
        setModels([ ...models, model ]);
    };

    return (
        <div>
            <Button label="Add models" onClick={handleAddModels}/>
            {models.map(m => (<UnitCompositionModelLine model={m}/>))}
        </div>
    );
};
