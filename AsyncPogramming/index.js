//await --> always used in async function. await pauses the execution of its surrounding async function until a promise is fullfilled


function getData(dataId){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      console.log('data',dataId);
      resolve('success');
    },2000);
  });
}

(async function(){
  await getData(1);
  await getData(2);
  await getData(3);
  await getData(4);
  await getData(5);
  await getData(6);
})();

// function api(){
//   return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//       console.log('weather data');
//     resolve(200);
//     },2000);
//   })
// }

// async function getWeatherData(){
//   await api();
//   await api();
// }


// function getData(dataId){
//   return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//       console.log('data',dataId);
//       resolve('success');
//     },5000);
//   })
// }

// getData(1)
// .then((res)=>{
//   return getData(2);
// })
// .then((res)=>{
//   return getData(3);
// })
// .then((res)=>{
//   console.log(res);
// })

// getData(1).then((res)=>{
//   console.log(res);
//   getData(2).then(()=>{
//     console.log(res);
//   })
// })

// function asyncFun1(){
//   return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//       console.log(' Data 1');
//       resolve('Some success message');
//     },4000)
//   })
// }

// function asyncFun2(){
//   return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//       console.log(' Data 2');
//       resolve('Some success message');
//     },4000)
//   })
// }

// // need data 1 first and then data 2
// console.log('Fetching data1')
// asyncFun1().then((res)=>{
//   console.log('Fetching data2');
//   asyncFun2().then((res)=>{})
// })



// function getData(dataId, getNextData){
//   return new Promise((resolve , reject)=>{
//     setTimeout(()=>{
//       console.log('data',dataId);
//       resolve('success');
//       if(getNextData){
//         getNextData();
//       }
//     },6000);
//   });
// }

// const getPromise = () =>{
//   return new Promise((resolve,reject)=>{
//     console.log('I am a promise');
//     reject('network error');
//     //resolve('success');
//   });
// };

// let promise = getPromise();
// promise.then((res) =>{
//   console.log('Promise fullfilled');
// })

// promise.catch((err)=>{
//   console.log(err);
// })