import './index.scss';
import 'remixicon/fonts/remixicon.css';
import { useState } from 'react';

const App = (props) => {

  return (
    <div className="container">
      <section className='section home'>
        <div className='contents'>
          <p className='label'>F&D SOFT</p>
          <p className='title'>THE 안전한 환경을 위해 노력합니다</p>

        </div>
        <img src={require("../../images/ci.svg").default} alt='FNDSOFT' />
      </section>
      <section className='section service0'>
        <div className='contents'>
          <div>
            <h2 className='label'>밸브관리 시스템</h2>
            <h3 className='title'>밸브의 시작부터 끝까지 모두 관리</h3>
            <p>F&D SOFT는 보다 안전한 밸브 관리를 위해 밸브 관리 시스템인 TVMS를 주력사업으로 하고 있습니다</p>
            <p>TVMS는 밸브의 견적요청이나 수주와 발주를 시작으로 설치및 수명관리 까지 보다 안전한 환경을 책임지는 토탈 솔루션입니다</p>
          </div>
          <div className='mobileFrame'>
            <img src={require("../../images/main.png").default} alt='FNDSOFT' className='mobileInImage'/>
            <img src={require("../../images/mobileFrame.png").default} alt='FNDSOFT' className='imageOver' />
          </div>
          <div>

          <img src={require("../../images/desktopMain.png").default} alt='FNDSOFT' className='imageRight' />
            <img src={require("../../images/desktopFrame.png").default} alt='FNDSOFT' className='imageRight' />
          </div>
        </div>
      </section>
      <section className='section service1'>
        <div className='contents'>
          <div>
            <h2 className='label'>크로스 지원</h2>
            <h3 className='title'>PC와 모바일 제약없이 모두 관리</h3>
            <p>PC 에서 관리하던 정보를 모바일에서도 바로 확인하고 제품설치 등록도 물론 가능하죠 휴대폰만 있다면.</p>
          </div>
          <div className='mobileFrame'>
            <img src={require("../../images/list.png").default} alt='FNDSOFT' className='mobileInImage'/>
            <img src={require("../../images/mobileFrame.png").default} alt='FNDSOFT' className='imageOver' />
          </div>
          <div>

            <img src={require("../../images/desktopMain.png").default} alt='FNDSOFT' className='imageRight' />
            <img src={require("../../images/desktopFrame.png").default} alt='FNDSOFT' className='imageRight' />
          </div>
        </div>
      </section>
      <section className='section service2'>
        <div className='contents'>
          <div>
            <h2 className='label'>빠른 정보 확인</h2>
            <h3 className='title'>QR코드 한번으로 확인</h3>
            <p>별도의 단말기가 필요없이 QR코드스캔 으로 밸브의 모든 이력을 확인하고 현재 상태를 관리 할 수 있습니다.</p>
          </div>
          <div className='mobileFrame'>
            <img src={require("../../images/scan.png").default} alt='FNDSOFT' className='mobileInImage'/>
            <img src={require("../../images/mobileFrame.png").default} alt='FNDSOFT' className='imageOver' />
          </div>
          <div>
            <img src={require("../../images/mobileDetail.png").default} alt='FNDSOFT' />
          </div>
        </div>
      </section>
      <section className='section about' id='about'>
        <div className='contents'>
          <div>
            <h2 className='label'>우리는</h2>
            <h3 className='title'>고객을 먼저 생각합니다</h3>
            <p>미래의 산업은, 전문적인 기술과, know-how가 융합된 산업의 변화가 이루어질 것입니다. 이에 맞추어 저희 F&D SOFT는 우수한 성능과 안전한 산업 환경을 위해서 설립되었습니다.</p>
            <p>당사의 최적화된 수명관리 기술은 시간 환경 까지 다양하고 완벽한 토탈 밸브케어에 주력을 하고 있으며, 이로 인한 기술의 발전 국가의 기반산업과, 경제 발전을 위한 모든 산업분야에 필수적으로 사용되어지는, 밸브관리의 안전에 기여하고 있습니다. </p>
            <p>다가올 미래에 전기, 전자, 반도체, 항공, 선박, 인공위성등 다양한 분야에 활용되어 지는 밸브의 기술발전에 앞장서서, 신뢰 받는 제품으로 기술개발 및 생산 공급을 고객에게 최고의 만족을 제공할 수 있도록 무한한 노력을 강구하겠습니다.</p>
            <p>고객 여러분의 지속적인 관심과 지도 편달을 부탁 드리겠습니다. 감사합니다.</p>
          </div>
        </div>
      </section>
      <div className='smallFrame'>
        <img src={require("../../images/mobileFrame.png").default} alt='FNDSOFT' />
      </div>
      <div className="arrowDown">
        <i className="ri-arrow-down-circle-line"></i>
        <span className='text'>scroll down</span>
      </div>
    </div>
  );
}

App.defaultProps = {
  topNum: null,
  type: 'list',
};

export default App;
