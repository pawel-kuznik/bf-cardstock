import { ReactNode } from "react";

import "./DialogFrame.css";

export interface DialogFrameProps {

    children: ReactNode;

    onClose?: () => void;
};

export function DialogFrame({ children, onClose }: DialogFrameProps) {
    return (
        <div className="dialogframe">
            {children}
        </div>
    );
};
