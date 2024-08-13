import { create } from "zustand";
import { Rule } from "./rule";
import { createJSONStorage, persist } from "zustand/middleware";
import { omitFromObject } from "../utils";


export interface RuleStore {

    /**
     *  The current rules in the store.
     */
    rules: { [ key: string ]: Rule };

    /**
     *  Store a new rule or update one that matches the id.
     */
    store: (rule: Rule) => void;

    /**
     *  Remove a rule by object or by id.
     */
    remove: (rule: Rule | string) => void;
};

/**
 *  This is the local storage of rules that can be attached to cards. The storage
 *  should be filled from a given data source, but this will come later. 
 */
export const useRuleStore = create<RuleStore>()(
    persist<RuleStore>((set) => ({

        rules: { },

        store: (rule: Rule) => {
            set(state => ({
                rules: {
                    ...state.rules,
                    ...{ [rule.id]: rule }
                }
            }))
        },

        remove: (rule: Rule | string) => {

            const id = typeof(rule) === "string" ? rule : rule.id;
            if (!id) return;

            set(state => ({
                ...state,
                ...{ rules: omitFromObject(state.rules, id) }
            }));
        }

    }), {
        name: "rules",
        storage: createJSONStorage(() => localStorage)
    })
);
