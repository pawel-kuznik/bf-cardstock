import { createJSONStorage, persist } from "zustand/middleware";
import { UnitCard } from "./unitCard";
import { create } from "zustand";


export interface UnitCardStore {
    
    /**
     *  The current cards in the store.
     */
    cards: { [key: string] : UnitCard };

    /**
     *  Store a new card. The card will be stored under a given id.
     */
    store: (card: UnitCard) => void;

    /**
     *  Remove a unit card by an instance of that card or an id.
     */
    remove: (card: UnitCard | string) => void;
};

/**
 *  This is a the local storage of unit cards. The storage should be filled
 *  with cards from a given data source, but this is something that will
 *  come at a later time. 
 */
export const useUnitCardStore = create<UnitCardStore>()(
    persist<UnitCardStore>((set) => ({
        cards: { },
        store: (card: UnitCard) => {
            set(state => ({
                cards: { 
                    ...state.cards,
                    ...{ [ card.id]: card }
                }
            }));
        },
        remove: (card: UnitCard | string) => {
            
            const id = typeof(card) === "string" ? card : card.id;

            if (!id) return;

            set(state => {

                const cards = { ...state.cards };
                delete cards[id];
                
                return {
                    ...state,
                    ...{ cards } 
                };
            });         
        }
    }), {
        name: "unit-cards",
        storage: createJSONStorage(() => localStorage)
    })
);