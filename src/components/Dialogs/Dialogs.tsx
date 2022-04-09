import React from "react";
import c from './Dialogs.module.css'


export const Dialogs = () => {
    return (
        <div className={c.dialogs}>
            <div className={c.dialogsItems}>
                <div className={c.dialog +''+c.active}>
                    Ibrahim
                </div>
                <div className={c.dialog}>
                    Muhammad
                </div>
                <div className={c.dialog}>
                    Xattab
                </div>
                <div className={c.dialog}>
                    Osama
                </div>
                <div className={c.dialog}>
                    Suleyman
                </div>
                <div className={c.dialog}>
                    Saddam
                </div>
                <div className={c.dialog}>
                    Hadji
                </div>
                <div className={c.dialog}>
                    Djohar
                </div>
            </div>
            <div className={c.messages}>
                <div className={c.message}>hi</div>
                <div className={c.message}>hello</div>
                <div className={c.message}>how are you?</div>
                <div className={c.message}>what is love?</div>
                <div className={c.message}>Baby dont heart me</div>
                <div className={c.message}>Dont heart me</div>
                <div className={c.message}>No more..</div>
                <div className={c.message}>Vladislav!</div>

            </div>
        </div>
    )

}