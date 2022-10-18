import './InfoBlock.css'
import Speaker from  "./lib/speaker.png"
import Access from  "./lib/access.png"

// Info block container

function InfoBlock() { return (
    <section id="blocks">

    <div className="blk">
      <img src={Access} alt="access" width={30} height={32} />
      <div className="item">
        <h4 className="fn-font">서비스 정보</h4>
        <h3 className="fn-font">딥러닝 기법을 통한 스푸핑 방지</h3>
        <br />
        <p
          style={{
            fontFamily: '"Noto Sans KR", sans-serif',
            fontSize: 15,
            lineHeight: "160%"
          }}
        >
          이 서비스는 딥러닝 기법으로 음성을 분석해, 해당 음성이 오디오 스푸핑의
          대표적인 3가지 유형인 '타인의 목소리를 녹음한 후 그대로 재생하는
          공격', '딥페이크 기술을 이용해 텍스트를 특정인의 목소리로 가공한 후
          재생하는 공격', '음성 합성 기술을 통해 음성을 변환한 후 재생하는
          공격'에 이용된 음성인지 여부를 판독하는 서비스입니다. <br />
          <br />
          서비스에 이용된 딥러닝 모델들은 3가지의 공격 유형 각각에 대응하는
          별도의 데이터셋을 이용해 학습되었습니다. 또한, 훈련된 각 모델은
          최종적으로 앙상블 기법을 이용해 하나의 서비스 모델로 통합되었습니다.
          이용된 데이터셋과 모델 정보는 깃허브 페이지에서 확인하실 수 있습니다.
        </p>
      </div>
    </div>

    <div className="blk">
      <img src={Speaker} alt="speaker" width={30} height={36} />
      <div className="item">
        <h4 className="fn-font">프로젝트 소개</h4>
        <h3 className="fn-font">2022 이화여자대학교 졸업 프로젝트</h3>
        <br />
        <p
          style={{
            fontFamily: '"Noto Sans KR", sans-serif',
            fontSize: 15,
            lineHeight: "160%"
          }}
        >
          뛰노는 이는 우리의 청춘의 있으랴? 인류의 가지에 자신과 이것이다.
          충분히 구하지 내는 주며, 얼마나 들어 자신과 낙원을 것이다. 방황하여도,
          평화스러운 미묘한 열매를 유소년에게서 운다.
        </p>
      </div>
    </div>
    
  </section>
) }

export default InfoBlock;