import React from 'react';
import logo from './logo.svg';
import Button, { ButtonType, ButtonSize } from './components/button/Button';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button data={{ disabled: true }}>Hello</Button>
        <Button
          data={{ btnType: ButtonType.Link, href: 'http://www.baidu.com' }}
        >
          Baidu Link
        </Button>
        <Button
          data={{ btnType: ButtonType.Link, href: 'http://www.baidu.com',disabled:true }}
        >
          Baidu Link
        </Button>
        <Button
          data={{ btnType: ButtonType.Primary }}
        >
          Primary1
        </Button>
        <Button
          data={{ btnType: ButtonType.Danger }}
        >
          Danger
        </Button>
        <Button
          data={{ btnType: ButtonType.Primary }}
        >
          Primary2
        </Button>
        <Button data={{ size: ButtonSize.Small }}>
          Small
        </Button>
        <Button data={{ size: ButtonSize.Large }}>
          Large
        </Button>
      </header>
    </div>
  );
}

export default App;
