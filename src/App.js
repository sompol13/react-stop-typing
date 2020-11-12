import React, { useState, useEffect, useRef } from 'react';

const App = () => {
  const [keyword, setKeyword] = useState('')
  const mountedRef = useRef(false);

  // This block will get execute on initial.
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

    // Execute if dependencies changes.
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
