
import 'remixicon/fonts/remixicon.css';

const App = (props) => {

  return (
    <div className="container sub">
      <div className='contents'>

        <div className='visual' style={{ backgroundImage: "url('assets/images/cesar-carlevarino-aragon-NL_DF0Klepc-unsplash.jpg')" }}>
          <div className='description'>
            <span className='desLabel'>CUSTOMER</span>
            <span className='desTitle'>고객의 환경에 맞춘 서비스</span>
          </div>
        </div>

        <div className='panner'>
          <div className='pannerHead'>
            <h2 className='pannerTitle'>합리적인 가격으로 만족을 더합니다</h2>
          </div>
          <div className='pannerBody'>
            <div className='pannerContents'>
              <p>앞으로 다가올 미래의 산업은, 전문적인 기술과,
                know-how가 융합된 산업의 변화가 이루어질 것입니다..


                이에 맞추어 저희 F&D는 우수한 성능과 완벽화된 품질의
                토출장비를 생산하기 위해서 설립되었습니다.


                당사의 정밀화된 액체 제어 기술은 극소량 제어에서, 다점 정량 제어까지
                다양하고 완벽한 토출장비 생산 및 개발에 주력을 하고 있으며,
                이로 인한 기술의 발전으로, 국가의 기반산업과, 경제 발전을 위한
                모든 산업분야에 필수적으로 사용되어지는, 토출 장비 생산 및 제조 유통에 기여하고 있습니다.
                이에 앞서, 다가올 미래에 전기, 전자, 반도체, 항공, 선박, 인공위성등 다양한 분야에 활용되어 지는
                토출장비 기술발전에 앞장서서, 신뢰 받는 제품으로 기술개발 및 생산 공급을
                고객에게 최고의 만족을 제공할 수 있도록 배전의 노력을 강구하겠습니다.


                고객 여러분의 지속적인 관심과 지도 편달을 부탁 드리겠습니다.
                감사합니다.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

App.defaultProps = {
  topNum: null,
  type: 'list',
};

export default App;
