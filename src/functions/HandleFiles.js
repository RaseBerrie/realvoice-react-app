import React, {useEffect, useState} from 'react';
import * as tf from '@tensorflow/tfjs';

import Loading from './Loading';

function HandleFiles(files) {
    let[alert, alertSet] = useState(true);

    

    async function LoadModel(url) {
        try {
            //call model
            const model = await tf.loadLayersModel(url.model);
            if(model) console.log('모델 로드됨');

// ***** 임시 함수 ***** //
            const timer = setTimeout(()=>{
            alertSet(false);
                }, 3000);
            clearTimeout(timer); 
// ***** 임시 함수 ***** //

            } catch (err) {
            console.log(err);
        }};

    useEffect(()=>{ tf.ready().then(()=>{
        const url = {
            model: 'https://objectstorage.ap-chuncheon-1.oraclecloud.com/p/xNf9QPNoA_0YZaUqjydeMUGnGU9hciSF_Lt8TZSPYEKf_aOdIvGlfuxzbaXbIT14/n/axqjb3wmdulc/b/bucket-20221010/o/web_model/model.json',
        };

        LoadModel(url);
        });
    },[])

    function HandleOutput() {
        return alert ? <Loading/> : (
          <form id="form-file-upload" onDragEnter={handleDrag} onSubmit={(e) => e.preventDefault()}>
          <input ref={inputRef} type="file" id="input-file-upload" multiple={false} onChange={handleChange} />
          <label id="content" htmlFor="input-file-upload" className={dragActive ? "drag-active" : "" }>
            <div className="text">
              <p className="fn-font">아래 버튼을 누르거나 드래그 앤 드롭으로
              <br />검사할 음성 파일을 업로드하세요.
              </p>
              <button className="btn fn-font" onClick={onButtonClick}>파일 업로드</button>
            </div> 
          </label>
          { dragActive && <div id="drag-file-element" onDragEnter={handleDrag} onDragLeave={handleDrag} onDragOver={handleDrag} onDrop={handleDrop}></div> }
          </form>
        )
      }
    return(

    )
}

export default HandleFiles;