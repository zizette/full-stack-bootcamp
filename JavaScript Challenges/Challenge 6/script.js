
setTimeout(messy("hello after 5s"),5000);
function messy(msg){
    console.log(msg)
}

const date = new Date();
console.log(date); // Fri Jun 17 2022 11:27:28 GMT+0100 (British Summer Time)
setInterval(showTime, 1000)
function showTime (){
  const d = new Date();
  document.getElementById("timer").innerHTML = d.toLocaleTimeString();
}
// Playing with Promises

function myDisplayer(some) {
    document.getElementById("demo").innerHTML = some;
  }
  
  let myPromise = new Promise(function(myResolve, myReject) {
    let x = 0;
  
    if (x == 0) {
      myResolve("Promise resolved");
    } else {
      myReject("Error");
    }
  });
  
myPromise.then(
    function(value) { /* code if successful */ },
    function(error) { /* code if some error */ }
  );

  myPromise.then(
    function(x) { alert("Chained message! value of ", x) },
    function(x) { alert("error", x) })

    