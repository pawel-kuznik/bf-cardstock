import { Button } from "@pawel-kuznik/react-faceplate";
import { Rule, useRuleStore } from "../../state";
import { RulePreview } from "../RulePreview";

export interface ItemProps {
    rule: Rule;
};

export function Item({ rule }: ItemProps) {

    const { remove } = useRuleStore();

    const handleRemove = () => {
        remove(rule);
    };

    const controls = (
        <>
            <Button onClick={handleRemove} size="mini" style="red"/>
        </>
    );

    return (
        <RulePreview rule={rule} controls={controls}/>
    );
};