import {useCallback , useMemo} from 'react'

function foo() {
    return 'bar';
  }
  
  const memoizedCallback = useCallback(foo, []);
  const memoizedResult = useMemo(foo, []);
  
  console.log(memoizedCallback);
  // ƒ foo() {
  //   return 'bar';
  // }
  console.log(memoizedResult); // 'bar'
 
 
 console.log(memoizedCallback()); // 'bar'
  console.log(memoizedResult()); //  TypeError