import { ReactNode } from "react";

import "./EditorHeader.css";

export interface EditorHeaderProps {

    title: string;
    controls: ReactNode;
};

/**
 *  A component to be used across different editors. It shows a title
 *  and controls in a consistent way.
 */
export function EditorHeader({ title, controls }: EditorHeaderProps) {
    return (
        <header className="editorheader">
            <div className="editorheader-title">
                {title}
            </div>
            <div className="editorheader-controls">
                {controls}
            </div>
        </header>
    );
};