import React from 'react';
import Button from './components/Button';

function Click(){
  alert(1);
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button disabled={true} onClick={Click}> Hello  </Button>
        <Button btnType= {'primary'} size={'lg'} autoFocus> Hello  </Button>
        <Button btnType= {'primary'} size={'sm'} onClick={Click}> Hello  </Button>
        <Button btnType= {'default'} size={'lg'}> Hello  </Button>
        <Button btnType= {'default'} size={'sm'}> Hello  </Button>
        <Button btnType= {'link'} href="https://www.baidu.com" disabled={true}> 百度Link  </Button>
        <Button btnType= {'link'} href="https://www.baidu.com" target="_blank"> 百度Link  </Button>
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
