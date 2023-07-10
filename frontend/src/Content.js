import { useState } from 'react';
import * as React from 'react';

function Content() {
    const [quote, setQuote] = useState([]);
  
    const whenClicked = () => {
      fetch(`http://localhost:3005/weapons`)
      .then (r => r.json())
      .then (data => {
        setQuote (data);
      })
    };
  
    return (
      <>
        <button type='button' onClick={() => whenClicked()}>Fetch weapons:</button>
        {quote.map((data) => {
              return (
                <li key={data.name}> {data.name}</li>
              )
        })}
      </>
    )
  
  };
  
  export default Content;