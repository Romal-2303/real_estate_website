import React from "react";
import classes from "./BrighterDaysComponent.module.scss";
import FloatingHouse from "@/assets/floatingHouse.png";
import Image from "next/image";

const BrighterDaysComponent = () => {
    return (
        <div className={classes["bdc-background-parent"]}>
            <div className={classes["header"]}>
                <div className={classes["polygon"]}></div>
            </div>

            <div className={classes["body"]}>
                <div className={classes["heading-text"]}>
                    <p>Say hello to <span>brighter</span></p>
                    <p><span>days</span> together</p>
                </div>
                <div className={classes["image-container"]}>
                    <Image src={FloatingHouse} alt="" width={800} height={500} />
                </div>
                <div className={classes['input-container']}>
                    <input type="text" className={classes["input-box"]} placeholder="Full Name" />
                    <input type="text" className={classes["input-box"]} placeholder="Email" />
                    <textarea className={classes["text-box"]} placeholder="Description" />
                    <button>Send</button>
                </div>
            </div>
        </div>
    );
};

export default BrighterDaysComponent;
