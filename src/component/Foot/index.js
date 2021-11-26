import './index.scss';
import 'remixicon/fonts/remixicon.css';

const App = (props) => {
  return (
    <footer className="foot">
      Copyright ⓒ F&D Soft Co.,LTD. All Rights Reserved
    </footer>
  );
}

App.defaultProps = {
  topNum: null,
  type: 'list',
};

export default App;
