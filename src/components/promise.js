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

 const result =  myPromise
    .then((message) => {
      console.log(message);
    })
    .catch((message) => {
      console.log(message);
    });

  return <div>
  {result}
  </div>;
};

export default DemoPromise;
