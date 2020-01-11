import React from 'react';
import style from "./index.module.css"

function index() {
    return (
        <div className={style.wrap}>
            <div className={style.userMsg}>
                <div className={style.userMsgWrap}>
                    <div className={style.userLogo}>

                    </div>
                    <div className={style.userMsgs}>
                        <div>15323807318</div>
                        <div>普通用户</div>
                    </div>
                </div>
            </div>
            <div className={style.userPower}>
                <ul>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                    <li>4</li>
                    <li>5</li>
                    <li>6</li>
                    <li>4</li>
                    <li>5</li>
                    <li>6</li>
                </ul>
            </div>
        </div>
    );
}

export default index;