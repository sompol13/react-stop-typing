import React, { useState, useEffect, useRef } from 'react';

const App = () => {
  const [keyword, setKeyword] = useState('')
  const mountedRef = useRef(false);

  // When component render 1st time.
  useEffect(() => {

    // Skip the componentWillMount lifecycle.
    if (!mountedRef.current) {
      mountedRef.current = true;
      return;
    }
    
    // A second timer to detect stop typing.  
    const timeout = setTimeout(() => {
      console.log('You have stopped typing.');
    }, 1000)

    // Release the recent timer.
    return () => clearTimeout(timeout)

    // When keyword state changes. 
  }, [keyword])

  return (
    <input
      type="text"
      value={keyword}
      onChange={(e) => setKeyword(e.target.value)}
    />
  )
}

export default App;
