//Loading
import './Loading.css';
import React, {useEffect, useState} from 'react';

function Loading() {
    //let[alert, alertSet] = useState(true);

    useEffect(()=>{
        const timer = setTimeout(()=>{
            console.log('콘솔작동됨!!!');      
            }, 3000);
            
        clearTimeout(timer);
    });             

    return(
        <>
        <div className="loadclass">
        <div className="preloader loading">
            <span className="slice" />
            <span className="slice" />
            <span className="slice" />
            <span className="slice" />
            <span className="slice" />
            <span className="slice" />
        </div>
        <h4 className="fn-font">입력받은 음성을 분석하는 중…….</h4>
        </div>
        </>
    )
}

export default Loading;