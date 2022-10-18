//eslint-disable no-unused-vars

//Import area
import './App.css';
import React from 'react';

//Functions
//import HandleFiles from './functions/HandleFiles';
import Loading from './functions/Loading';

//Containers
import TopContainer from './containers/TopContainer';
import InfoBlock from './containers/InfoBlock';
import IntroBlock from './containers/IntroBlock';

//Images
import Top from "./lib/images/top.png"

//Web app design area
export const App = () => {
  //state definition
  const [dragActive, setDragActive] = React.useState(false);
  const [loading, isLoading] = React.useState(false);

  //ref
  const inputRef = React.useRef(null); 

  // handle drag events
  const handleDrag = function(e) {
    e.preventDefault();
    e.stopPropagation();
    
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = function(e) {
    e.preventDefault();
    e.stopPropagation();

    setDragActive(false);
    if (e.dataTransfer.files) {
      isLoading(true);
      //HandleFiles(e.dataTransfer.files);
    }
  };

  const handleChange = function(e) {
    e.preventDefault();
    if (e.target.files) {
      isLoading(true);
      //HandleFiles(e.target.files);
    }
  };

  const onButtonClick = () => {
    inputRef.current.click();
  };

  function DragDrop() {
    return loading ? <Loading/> : (
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

export default App;
