import './App.css';

function App() {
  const digits = [];

  const createDigits = () => {
    for(let i = 1; i <10 ; i++) {
      digits.push(i);
    }
    return digits;
  }
  return (
    <div className="App">
      <div className="calculator">
        <div className="display">
          <span>(0)</span>0
        </div>
          <div className="operators">
            <button>/</button>
            <button>x</button>
            <button>+</button>
            <button>-</button>
            <button>DEL</button>
          </div>
          <div className="digits">
              {createDigits().map((digit, index)=>{
                return <button key={index}>{digit}</button>;
              })} 
              <button>0</button>
              <button>.</button>
              <button>=</button>
            </div>  
      </div>
    </div>
  );
}

export default App;
