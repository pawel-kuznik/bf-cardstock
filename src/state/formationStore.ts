import { createJSONStorage, persist } from "zustand/middleware";
import { create } from "zustand";
import { omitFromObject } from "../utils";
import { Formation } from "./formation";


export interface FormationStore {
    
    /**
     *  The current cards in the store.
     */
    formations: { [key: string] : Formation };

    /**
     *  Store a new card. The card will be stored under a given id.
     */
    store: (card: Formation) => void;

    /**
     *  Remove a unit card by an instance of that card or an id.
     */
    remove: (card: Formation | string) => void;
};

/**
 *  This is a the local storage of unit cards. The storage should be filled
 *  with cards from a given data source, but this is something that will
 *  come at a later time. 
 */
export const useFormationStore = create<FormationStore>()(
    persist<FormationStore>((set) => ({
        formations: { },
        store: (formation: Formation) => {
            set(state => ({
                formations: { 
                    ...state.formations,
                    ...{ [ formation.id]: formation }
                }
            }));
        },
        remove: (formation: Formation | string) => {
            
            const id = typeof(formation) === "string" ? formation : formation.id;
            if (!id) return;

            set(state => ({
                ...state,
                ...{ formations: omitFromObject(state.formations, id) }
            }));         
        }
    }), {
        name: "formations",
        storage: createJSONStorage(() => localStorage)
    })
);