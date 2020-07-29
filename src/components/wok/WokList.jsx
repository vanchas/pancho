import React, {useEffect, useState} from "react";
import WokCard from "./WokCard";
import s from "./wok.module.scss";

export default function WokList({woks, addAnOrderItem, title, type}) {
    const [wokArray, setWokArray] = useState(null)

    useEffect(() => {
        if (woks) {
            setWokArray(woks.filter(w => w.type === type))
        }
    }, [woks])

    return (
        <div>
            <h2 className={s.wok_list_heading}>{title}</h2>
            <ul className={s.wok_list}>
                {wokArray && wokArray.length &&
                wokArray.map((w, i) => (
                    <li key={i}>
                        <WokCard
                            wok={w}
                            addAnOrderItem={addAnOrderItem}
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
}
