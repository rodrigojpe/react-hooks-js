import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement, incrementByAmount } from './store/slices/counter/counterSlice';

function App() {


  const { counter  } = useSelector( state => state.counter );
  const dispatch = useDispatch( );
  
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => dispatch( increment() )}>
          increment {counter}
        </button>
        <br />
        <button onClick={() => dispatch( decrement() )}>
          decrement {counter}
        </button>
        <br />
        <button onClick={() => dispatch( incrementByAmount(2) )}>
          Increment by 2 {counter}
        </button>
        
      </div>
     
    </>
  )
}

export default App
