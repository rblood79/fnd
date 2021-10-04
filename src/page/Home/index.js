import './index.scss';
import 'remixicon/fonts/remixicon.css';
import { useState } from 'react';

const App = (props) => {
  const [data] = useState(
    [
      {
        label: 'VALVE', title: '자동밸브란?', img: 'assets/images/photo-1586040661238-69c4c4a46b55.jpeg'
      },
      {
        label: 'EDUCATION', title: '업체교육', img: 'assets/images/glenn-carstens-peters-npxXWgQ33ZQ-unsplash.jpg'
      },
      {
        label: 'PRICE', title: '견적상담', img: 'assets/images/mediensturmer-aWf7mjwwJJo-unsplash.jpg'
      },
      {
        label: 'OTHER', title: '지점모집', img: 'assets/images/montylov-C3CEdU9NzZ0-unsplash.jpg'
      }
    ]
  )

  const Item = () => {
    const result = [];
    data.forEach((v) => {
      result.push(
        <div className='item' key={v.label + v.title} style={{ backgroundImage: "url("+v.img+")" }}>
          <span className='itemLabel'>{v.label}</span>
          <span className='itemTitle'>{v.title}</span>
        </div>
      )
    })
    return result;
  }

  return (
    <div className="container home">
      <div className='copy'>
        <p>THE 안전한 환경을 위해 노력합니다</p>
        <p><b>F&D Software</b>와 함께하세요</p>
      </div>
      <div className='section'>
        <Item />
      </div>
      <div className='copy'><p>For the Safty Factory</p></div>
    </div>
  );
}

App.defaultProps = {
  topNum: null,
  type: 'list',
};

export default App;
