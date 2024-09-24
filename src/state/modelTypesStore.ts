import { createJSONStorage, persist } from "zustand/middleware";
import { create } from "zustand";
import { omitFromObject } from "../utils";
import { ModelType } from "./models";


export interface ModelTypeStore {
    
    /**
     *  The current cards in the store.
     */
    modelTypes: { [key: string] : ModelType };

    /**
     *  Store a new card. The card will be stored under a given id.
     */
    store: (card: ModelType) => void;

    /**
     *  Remove a unit card by an instance of that card or an id.
     */
    remove: (card: ModelType | string) => void;
};

/**
 *  This is a the local storage of unit cards. The storage should be filled
 *  with cards from a given data source, but this is something that will
 *  come at a later time. 
 */
export const useModelTypeStore = create<ModelTypeStore>()(
    persist<ModelTypeStore>((set) => ({
        modelTypes: { },
        store: (modelType: ModelType) => {
            set(state => ({
                modelTypes: { 
                    ...state.modelTypes,
                    ...{ [ modelType.id]: modelType }
                }
            }));
        },
        remove: (modelType: ModelType | string) => {
            
            const id = typeof(modelType) === "string" ? modelType : modelType.id;
            if (!id) return;

            set(state => ({
                ...state,
                ...{ modelTypes: omitFromObject(state.modelTypes, id) }
            }));         
        }
    }), {
        name: "model-types",
        storage: createJSONStorage(() => localStorage)
    })
);