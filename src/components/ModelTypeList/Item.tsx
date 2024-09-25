import { ModelType } from "../../state";

export interface ItemProps {

    modelType: ModelType;
};

export function Item({ modelType }: ItemProps) {
    return (
        <div>
            {modelType.name}
        </div>
    );
};
