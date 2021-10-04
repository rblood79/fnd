import './index.scss';
import 'remixicon/fonts/remixicon.css';

const App = (props) => {
  return (
    <footer className="foot">
      F&D All rights reserved.
    </footer>
  );
}

App.defaultProps = {
  topNum: null,
  type: 'list',
};

export default App;
