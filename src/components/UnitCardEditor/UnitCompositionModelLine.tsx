import { Input } from "@pawel-kuznik/react-faceplate";
import { UnitCompositionModels } from "../../state";
import { ModelTypePicker } from "../ModelTypePicker";

export interface UnitCompositionModelLineProps {
    model: UnitCompositionModels;
};

export function UnitCompositionModelLine({ model }: UnitCompositionModelLineProps)  {

    return (
        <div>
            <ModelTypePicker defaultValue={model.model}/>
            <Input type="number" defaultValue={model.count}/>
        </div>
    );
};
