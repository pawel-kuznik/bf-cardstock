import { Input } from "@pawel-kuznik/react-faceplate";
import { ModelType, UnitCompositionModels, useModelTypeStore } from "../../state";
import { ModelTypePicker } from "../ModelTypePicker";
import { useRef } from "react";
import { prepareUnitCompositionModels } from "../../logic/prepareUnitCompositionModels";

export interface UnitCompositionModelLineProps {
    model: UnitCompositionModels;
    onChange: (models: UnitCompositionModels) => void;
};

export function UnitCompositionModelLine({ model, onChange }: UnitCompositionModelLineProps)  {

    const { modelTypes } = useModelTypeStore();

    const typeRef = useRef<ModelType>(modelTypes[model.model]);
    const countRef = useRef<string>(String(model.count));

    const handleChange = () => {

        const currentCount = countRef.current;
        const currentModel = typeRef.current;

        if (!currentCount || !currentModel) return;

        const changedModel = prepareUnitCompositionModels({ 
            count: Number(currentCount),
            model: currentModel.id
        });

        onChange(changedModel);
    };

    return (
        <div>
            <ModelTypePicker defaultValue={model.model} valueRef={typeRef} onChange={handleChange}/>
            <Input type="number" defaultValue={model.count} valueRef={countRef} onChange={handleChange}/>
        </div>
    );
};
