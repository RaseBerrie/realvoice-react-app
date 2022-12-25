import './ShowResult.css'
import TopContainer from '../containers/TopContainer';
import IntroBlock from '../containers/IntroBlock';
import InfoBlock from '../containers/InfoBlock';

//Result page container
function Check() { return (
  <svg
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 130.2 130.2">
    <circle
      className="path circle"
      fill="none"
      stroke="#73AF55"
      strokeWidth={6}
      strokeMiterlimit={10}
      cx="65.1"
      cy="65.1"
      r="62.1"
    />
    <polyline
      className="path check"
      fill="none"
      stroke="#73AF55"
      strokeWidth={6}
      strokeLinecap="round"
      strokeMiterlimit={10}
      points="100.2,40.2 51.5,88.8 29.8,67.5 "
    />
  </svg>
)}

function Cross() { return (
  <svg
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 130.2 130.2"
  >
    <circle
      className="path circle"
      fill="none"
      stroke="#D06079"
      strokeWidth={6}
      strokeMiterlimit={10}
      cx="65.1"
      cy="65.1"
      r="62.1"
    />
    <line
      className="path line"
      fill="none"
      stroke="#D06079"
      strokeWidth={6}
      strokeLinecap="round"
      strokeMiterlimit={10}
      x1="34.4"
      y1="37.9"
      x2="95.8"
      y2="92.3"
    />
    <line
      className="path line"
      fill="none"
      stroke="#D06079"
      strokeWidth={6}
      strokeLinecap="round"
      strokeMiterlimit={10}
      x1="95.8"
      y1={38}
      x2="34.4"
      y2="92.2"
    />
  </svg>
)}

function Bona() { return (
    <>
    <section id="ressec_bona">
    {TopContainer()}
    <br />
    {Check()} <br /><br /><br />
    
    <div className = "rsp">
    <h3 className='fn-font'> 이 음성은 실제 음성입니다. </h3>
    
    <p className='fn-font'>
    이 음성은 이전에 녹음되었던 것을 재녹음한 것이 아니거나, <br />
    기타 다른 음성 조작을 거치지 않은 음성일 가능성이 큽니다.
    </p>
    
    <button className='btn fn-font'>돌아가기</button>
    </div>
    </section>

    {IntroBlock()} 
    {InfoBlock()}
    </>
)}

function Fake() { return (
    <>
    <section id="ressec_fake">
    {TopContainer()}
    <br />
    {Cross()} <br /><br /><br />
    
    <div className = "rsp">
    <h3 className='fn-font'>이 음성은 조작된 음성입니다. </h3>
    
    <p className='fn-font'>
    이 음성은 이전에 녹음되었던 것을 재녹음한 것이거나, <br />
    기타 다른 음성 조작을 거쳐 수정된 음성일 가능성이 큽니다.
    </p>
    
    <button className='btn fn-font'>돌아가기</button>
    </div>
    </section>

    {IntroBlock()} 
    {InfoBlock()}
    </>
)}

export {Bona, Fake};