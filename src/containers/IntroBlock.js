import './IntroBlock.css'
import Logo from  "./lib/logo.png"

// Intro block container

function IntroBlock() { return (
  <section id="intro">

    <div className="info">
      <div className="line">
        <h3 className="fn-font">인공지능 가짜 음성 판독 서비스</h3>
        <h2 className="fn-font">리얼 보이스</h2>
      </div>
      <img src={Logo} alt="리얼 보이스 로고" />
      <div className="exp">
        <p
          style={{
            fontFamily: '"Noto Sans KR", sans-serif',
            fontSize: 11,
            color: "gray"
          }}
        >
          뛰노는 이는 우리의 청춘의 있으랴? 인류의 가지에 자신과 이것이다.{" "}
          <br />
          충분히 구하지 내는 주며, 얼마나 들어 자신과 낙원을 것이다. <br />
          방황하여도, 평화스러운 미묘한 열매를 유소년에게서 운다.
        </p>
      </div>
    </div>

  </section>
) }

export default IntroBlock;