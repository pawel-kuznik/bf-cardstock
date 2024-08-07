export interface RatingLineProps {
    rating: number;
    label: string;
};

export function RatingLine({ rating, label }: RatingLineProps) {
    return (
        <div>
            <span>{label}</span> <span>{rating}+</span>
        </div>
    );
};