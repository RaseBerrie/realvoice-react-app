//eslint-disable no-unused-vars

//Import area
import React from 'react';

//Functions
import HandleFiles from './functions/HandleFiles';
import './functions/Loading.css';

//Containers
import TopContainer from './containers/TopContainer';

import InfoBlock from './containers/InfoBlock';
import IntroBlock from './containers/IntroBlock';

//Images
import Top from "./lib/images/top.png"

//Web app design area
function Main() {
  //definitions
  const [dragActive, setDragActive] = React.useState(false);
  const [loading, isLoading] = React.useState(false);
  const formData = new FormData();

  //ref
  const inputRef = React.useRef(null); 

  //handle drag events
  const handleDrag = function(e) {
    e.preventDefault();
    e.stopPropagation();
    
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

/* ======================================== */
/* File Handling Area */

  const handleDrop = function(e) {
    e.preventDefault();
    e.stopPropagation();

    setDragActive(false);
    if (e.dataTransfer.files[0].type.match("audio/.*")) { //유효성 검사(DnD)
        formData.append('uploadFile', e.dataTransfer.files[0]);

        isLoading(true); //로딩 화면 출력
        HandleFiles(formData);
      } else {
        alert('오디오 파일을 입력해 주세요!')
      }
  };

  const handleChange = function(e) {
    e.preventDefault();
    if (e.target.files[0].type.match("audio/.*")) { //유효성 검사(Form)
      formData.append('uploadFile', e.target.files[0]);
      
      isLoading(true); //로딩 화면 출력
      HandleFiles(formData);
    } else {
      alert('오디오 파일을 입력해 주세요!') 
    }
  };

/* ======================================== */

  const onButtonClick = () => {
    inputRef.current.click();
  }; //클릭 연동

  function DragDrop() {
    return loading ? <Loading/> : (
      <form id="form-file-upload" onDragEnter={handleDrag} onSubmit={(e) => e.preventDefault()}>
      <input ref={inputRef} type="file" id="input-file-upload" multiple={false} accept="audio/*" onChange={handleChange} />
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

  function Loading() {       
    return (
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
  } //로딩 화면 컴포넌트 디자인

  return (
    <>
  <section id="visual">

    {TopContainer()}
    {DragDrop()}

    <div className="cc">
      <h5 className="fn-font">
        Icon Copyright ⓒDenis Klyuchnikov, from Noun Project
      </h5>
    </div>

  </section>
  
  {IntroBlock()} 
  {InfoBlock()}

  <div style={{ position: "fixed", bottom: 5, right: 5 }}>
    <a href="#visual">
      <img src={Top} alt="위로 가기" width={70} height={70} />
    </a>
  </div>
    </>
  );
}

export default Main;