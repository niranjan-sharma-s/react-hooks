import React from "react";

const DemoPromise = () => {
  let num = 10;

  const myPromise = new Promise((reject, resolve) => {
    try {
      setTimeout(() => {
        if (num % 2 === 0) {
          resolve("number is even");
        } else {
          reject("number is odd");
        }
      }, 3000);
    } catch (error) {
      console.log(error);
    }
  });

  const result = myPromise
    .then((message) => {
      console.log(message);
    })
    .catch((message) => {
      console.log(message);
    });

  return <div>{result}</div>;
};

//Promise.all

const promise1 = Promise.resolve(1);

const promise2 = Promise.resolve(2);

const promise3 = Promise.resolve(3);

Promise.all([promise1, promise2, promise3])

  .then((values) => {
    console.log(values); // Output: [1, 2, 3]
  })

  .catch((error) => {
    console.error(error);
  });

export default DemoPromise;
