import { useModelTypeStore } from "../../state";
import { Item } from "./Item";

export function ModelTypeList() {

    const { modelTypes } = useModelTypeStore();

    return (
        <div>
            {Object.values(modelTypes).map(t => (<Item key={t.id} modelType={t}/>))}
        </div>
    );
};
