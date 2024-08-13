import { ReactNode } from "react";
import { Rule } from "../../state";
import { ContentBox } from "@pawel-kuznik/react-faceplate";

export interface RulePreviewProps {
    rule: Rule;
    controls?: ReactNode;
};

export function RulePreview({ rule, controls }: RulePreviewProps) {
    
    return (
        <ContentBox
            label={rule.name}
            sideToolbar={controls}
        >
            {rule.description}
        </ContentBox>
    );
};