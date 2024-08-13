import { useRuleStore } from "../../state";
import { Item } from "./Item";

export function RulesList() {
    
    const { rules } = useRuleStore();
  
    return (
        <div>
            {Object.values(rules).map((rule, idx) => (<Item key={idx} rule={rule}/>))}
        </div>
    );
};