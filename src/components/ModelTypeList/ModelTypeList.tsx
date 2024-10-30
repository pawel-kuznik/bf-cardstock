import { Button, ButtonLine, DataTable } from "@pawel-kuznik/react-faceplate";
import { useModelTypeStore } from "../../state";
import { Item } from "./Item";

export function ModelTypeList() {

    const { modelTypes } = useModelTypeStore();

    const data = Object.values(modelTypes)
        .sort((a, b) => a.name.localeCompare(b.name))
        .map(t => [
            (<Item key={t.id} modelType={t}/>),
            (
                <ButtonLine>
                    <Button label="Edit"/>
                    <Button label="Delete"/>
                </ButtonLine>
            )
        ]);

    return (
        <DataTable
            columns={[
                { label: "Model type", width: "auto" },
                { label: "Controls", width: "10%"}
            ]}
            data={data}
        />
    );
};
