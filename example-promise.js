//challeng

function addPromise (a, b){
  return new Promise (function (resolve, reject){
    if (typeof a === 'number' && typeof b === 'number') {
      resolve(a + b)
    } else {
      reject('Can Not be Done!');
    }
  });
}

addPromise(5, 6).then(function (sum){
  console.log('success', sum);
}, function (){
  console.log('failed', err);
});

addPromise('ehsan', 8).then(function (sum){
  console.log('success', sum);
}, function (err){
  console.log('failed', err);
});
