export interface RollCheckProps {
    value: number;
};

/**
 *  A component to format the roll check consistently across
 *  the software. A roll check is an indication how much a player
 *  has to roll to pass a specific check.
 */
export function RollCheck({ value }: RollCheckProps) {
    return (
        <span>{value}+</span>
    );
};