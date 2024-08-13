import { Button, useModalControls } from "@pawel-kuznik/react-faceplate";
import { RuleEditorDialog, RulesList } from "../components";

/**
 *  This is a page that displays all stored rules. The rules stored here
 *  would be across all game systems and filter options would allow for
 *  narrowing down the actual subset.
 * 
 *  The rules will also show which unit cards they affect. 
 */
export function RulesPage() {

    const { show } = useModalControls();

    const handleCreate = () => {

        show("create-new-rule", RuleEditorDialog, { });
    };

    return (
        <div>
            <Button label="Create" onClick={handleCreate}/>
            <RulesList/>
        </div>
    );
};