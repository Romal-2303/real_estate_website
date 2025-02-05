"use client";
import { ReactNode } from "react";
import classes from "./BackgroundScreen.module.scss"

type Props = {
    children: ReactNode;
    customID?: string;
    onClick?: () => void;
};

const BackgroundScreen = ({ children, customID, onClick, ...props }: Props) => {
    return (
        <div
            id={customID}
            className={classes["background-screen-filter"]}
            onClick={onClick}
            {...props}
        >
            {children}
        </div>
    );
};

export default BackgroundScreen;
