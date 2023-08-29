
const delayedPromise = new Promise((resolve) => {
    setTimeout(() => {
      resolve("Promise resolved!");
    }, 2000);
  });

  delayedPromise.then((message) => {
    alert(message);
    console.log("Chained message!");
  });
  delayedPromise(10000);

  async function fetchData() {
    try {
      let response = await fetch("https://uselessfacts.jsph.pl/random.json?language=en");
      let data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  
  // using promise 
  
  fetch('https://uselessfacts.jsph.pl/random.json?language=en')
      .then(response => response.json())
      .then(postData => {
          console.log(postData);
      })
      .catch(error => {
          console.error(`Error fetching post ${post}:`, error);
      });

      async function fetchData() {
        try {
            await 
             fetch('https://uselessfacts.jsph.pl/random.json?language=en').then(response => response.json(),10000);

            console.log("done");
        } catch (error) {
            console.log("Error fetching data:", error);
        }
    }

    fetchData();
    // 
//Step 4
let array=[];
async function fetchMusltiple(){
    try {
        array.push(await Promise.all([
            fetch("https://dog.ceo/api/breeds/image/random").then(response => response.json())
            // fetch("https://dog.ceo/api/breeds/image/random").then(response => response.json())
            // fetch("https://dog.ceo/api/breeds/image/random").then(response => response.json())
        ]))
        console.log(array);
    }
    catch (error) {
        console.log("Error fetching data:", error)
    }
    }
