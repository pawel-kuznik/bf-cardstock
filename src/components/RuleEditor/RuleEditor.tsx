import { BasicForm, Button, FormField } from "@pawel-kuznik/react-faceplate";
import { prepareRule } from "../../logic/prepareRule";
import { Rule, useRuleStore } from "../../state";

export interface RuleEditorProps {

    onStore?: (rule: Rule) => void;
};

/**
 *  This is a component that allows for creation or editing a specific rule. 
 */
export function RuleEditor({ onStore }: RuleEditorProps) {

    const { store } = useRuleStore();

    const handleSubmit = (data: object) => {

        const rule = prepareRule(data);
        store(rule);
        onStore?.(rule);
    };

    return (
        <BasicForm onSubmit={handleSubmit}>
            <FormField label="Rule name" name="name" type="text"/>
            <FormField label="Rule description" name="description" type="textarea" rows={10}/>
            <Button label="Submit"/>
        </BasicForm>
    );
};