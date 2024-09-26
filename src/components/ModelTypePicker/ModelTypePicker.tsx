import { SelectInput } from "@pawel-kuznik/react-faceplate";
import { ModelType, useModelTypeStore } from "../../state";
import { MutableRefObject } from "react";

export interface ModelTypePickerProps {

    /**
     *  A callback called when the user changes to a new model type.
     */
    onChange?: (value: ModelType) => void;

    /**
     *  The model type to select or an ID of one.
     */
    defaultValue?: ModelType | string;

    /**
     *  The ref to the currently selected value.
     */
    valueRef?: MutableRefObject<ModelType|undefined>;
};

export function ModelTypePicker({ onChange, defaultValue, valueRef }: ModelTypePickerProps) {

    const { modelTypes } = useModelTypeStore();

    const options = Object.values(modelTypes).map(type => type.id);
    const labels = Object.values(modelTypes).map(type => type.name);

    const handleChange = (id: string) => {

        const modelType = modelTypes[id];
        if (!modelType) return;

        if (valueRef) {
            valueRef.current = modelType;
        }

        onChange?.(modelType);
    };

    const preselectedId:string|undefined = (() => {

        if (defaultValue) return typeof(defaultValue) === "string" ? defaultValue : defaultValue.id;
        
        if (valueRef) return valueRef.current?.id;

        return undefined;
    })();

    return (
        <SelectInput
            options={options}
            labels={labels}
            onChange={handleChange}
            defaultValue={preselectedId}
        />
    );
};
