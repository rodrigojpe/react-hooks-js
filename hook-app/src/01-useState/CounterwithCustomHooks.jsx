
import {useCounter } from '../hooks/useCounter'

export const CounterwithCustomHooks = () => {

  const { counter, increment, reset, drecrement } = useCounter()



  return (
    <>
      <h1>Counter with custom hooks: { counter} </h1>
      <hr />

      <button onClick={ () => increment(2) } className="btn btn-primary">+1</button>
      <button onClick={reset } className="btn btn-primary">Reset</button>
      <button onClick={()=> drecrement(1)} className="btn btn-primary">-1</button>

    
    </>
  )
}
