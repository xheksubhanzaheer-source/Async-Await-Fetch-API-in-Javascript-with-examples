// async function getData() {
//     //simulate getting data from a server
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(455)
//         }, 3500);
//     })

async function getData() {
    //simulate getting data from a server
    // let x = await fetch("https://jsonplaceholder.typicode.com/todos/1")
   
    let x = await fetch("https://jsonplaceholder.typicode.com/todos/1")
    let Data = await x.json
    console.log(Data)
    //    return 455

}
// .then(response => response.json())
// .then(json => console.log(json));
async function main() {

    console.log("Loading modulus")

    console.log("Do something else");

    console.log("Load Data");
    let Data = await getData()

    console.log(Data)

    console.log("Process Data");

    console.log("task 2");
}
main()





// Data.then((v)=>{
// console.log(Data)

// console.log("Process Data");

// console.log("task2");

// })