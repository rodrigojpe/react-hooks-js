import React from 'react'
import { useFetch } from '../hooks/useFetch'
import { useCounter } from '../hooks/useCounter'

export const MultipleCustomHooks = () => {


  const { counter, increment, reset, drecrement } = useCounter()
  

  const { data, isLoading, hasError } = useFetch(`https://api.breakingbadquotes.xyz/v1/quotes/${counter}`)
  const { author, quote } = !!data && data[0];


  return (
   <>
      <h1>BreakingBad Quotes</h1>   
      <hr/>
   
      {
        isLoading
        ? (
          <div className='alert alert-info text-center'>
            Loading...
          </div>
        )
        : (
          <blockquote className='blockquote text-end'>
            <p className='mb-0'>{quote}</p>
            <footer className='blockquote-footer'>{author}</footer>
          
          </blockquote>
        )
      }

<button className='btn btn-primary' onClick={ () => increment(1) }> Next Quote</button>

   </>
  )
}
