import React from 'react';
import Button, { ButtonType, ButtonSize } from './components/Button/button';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button disabled={true}> Hello  </Button>
        <Button btnType= {ButtonType.Primary} size={ButtonSize.Large} autoFocus> Hello  </Button>
        <Button btnType= {ButtonType.Danger} size={ButtonSize.Small}> Hello  </Button>
        <Button btnType= {ButtonType.Default} size={ButtonSize.Large}> Hello  </Button>
        <Button btnType= {ButtonType.Default} size={ButtonSize.Small}> Hello  </Button>
        <Button btnType= {ButtonType.Link} href="https://www.baidu.com" disabled={true}> 百度Link  </Button>
        <Button btnType= {ButtonType.Link} href="https://www.baidu.com" target="_blank"> 百度Link  </Button>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
