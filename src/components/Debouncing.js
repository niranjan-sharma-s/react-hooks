//Input tag with event listener / handler

<input type="search" onChange={optimisedSearch} />;

function searchHandler(...arg) {
  // get value from input
  const value = arg[0].target;

  //fetch / search/ API operation wtih value
  fetchResults(value);
}

const optimisedSearch = debounce(searchHandler, 500);

const debounce = (func, delay) => {
  let timer;
  return function (...arg) {
    context = this;
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(context, ...arg);
    }, delay);
  };
};

/*
Debouncing is a technique where we can monitor the time delay of user action and once that delay reaches our predetermined threshold we can can make the function call.
Throttling is a technique where we make the function call in a predetermined time interval irrespective of continuous user actions.
Even though both debouncing and throttling seems like similar, both have their own use-cases. It’s not recommended to use throttling logic in search bar and we we cannot use debouncing in shooting game scenario or browser resizing or onScroll events.
*/

const throttleFunc = (func, interval) => {
  let shouldFire = true;
  return function () {
    if (shouldFire) {
      func();
      shouldFire = false;
      setTimeout(() => {
        shouldFire = true;
      }, interval);
    }
  };
};

throttleFunc(eventHandler, 500);
