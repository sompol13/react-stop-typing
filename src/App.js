import React, { useState, useEffect, useRef } from 'react';

const App = () => {
  const [keyword, setKeyword] = useState('')
  const mountedRef = useRef(false);

  useEffect(() => {
    // Skip the componentWillMount lifecycle.
    if (!mountedRef.current) {
      mountedRef.current = true;
      return;
    }
    
    // A timer to detect stop typing.  
    const timeout = setTimeout(() => {
      console.log('You have stopped typing.');
    }, 1000)

    // Release the recent typing timer.
    return () => clearTimeout(timeout)

    // "Initial" and keyword state changes. 
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
