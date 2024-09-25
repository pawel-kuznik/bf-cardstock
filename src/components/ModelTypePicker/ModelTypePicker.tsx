import { SelectInput } from "@pawel-kuznik/react-faceplate";
import { ModelType, useModelTypeStore } from "../../state";

export interface ModelTypePickerProps {

    /**
     *  A callback called when the user changes to a new model type.
     */
    onChange?: (value: ModelType) => void;

    /**
     *  The model type to select or an ID of one.
     */
    defaultValue?: ModelType | string;
};

export function ModelTypePicker({ onChange, defaultValue }: ModelTypePickerProps) {

    const { modelTypes } = useModelTypeStore();

    const options = Object.values(modelTypes).map(type => type.id);
    const labels = Object.values(modelTypes).map(type => type.name);

    const handleChange = (id: string) => {

        const modelType = modelTypes[id];
        if (!modelType) return;

        onChange?.(modelType);
    };

    return (
        <SelectInput
            options={options}
            labels={labels}
            onChange={handleChange}
            defaultValue={defaultValue ? (typeof(defaultValue) === "string" ? defaultValue : defaultValue.id) : undefined}
        />
    );
};
