
import { useState } from 'react';
import 'remixicon/fonts/remixicon.css';

const App = (props) => {
  const [data] = useState([
    { title: 'POSCO' }, { title: 'S&S' }, { title: '현대제철' }, { title: '현대자동차' }, { title: '삼성전자' }, { title: 'LG전자' }, { title: '한일병원' }
  ]);

  const Item = () => {
    const result = [];
    data.forEach((v) => {
      result.push(
        <div className='listItem' key={v.label + v.title}>
          <span />
          <img className='itemImage' src={'https://www.posco.co.kr/docs/kor6/jsp/_images/common/posco_ci.png'} alt={'파트너'}/>
          <span className='itemTitle'>{v.title}</span>
        </div>
      )
    })
    return result;
  }
  
  return (
    <div className="container sub">
      <div className='contents'>

        <div className='visual' style={{ backgroundImage: "url('assets/images/remi-walle-UOwvwZ9Dy6w-unsplash.jpg')" }}>
          <div className='description'>
            <span className='desLabel'>PARTNER</span>
            <span className='desTitle'>우리와 함께하는</span>
          </div>
        </div>

        <div className='panner'>
          <div className='pannerHead'>
            <h2 className='pannerTitle'>고객사</h2>
          </div>
          <div className='pannerBody'>
            <div className='pannerList'>
              <Item />
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
