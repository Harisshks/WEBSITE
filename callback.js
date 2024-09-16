// function success(){
//     console.log("Success")
// }
// function fail(){
//     console.log("Fail")
// }
// function error(){
//     console.log("Error")
// }
// function execution(data,call){
//     if(data){
//         console.log(`Balance : ${data}`)
//     }
//     setTimeout(call,2000)
// }
// function result(data){
//     if(data>0){
//         execution(data,success)
//     }
//     else if(data<=0){
//         execution(data,fail)
//     }
//     else{
//     error()
//     }
// }
// result("adfsa")
// async function API() {
//     try{
//     const response = await fetch("https://66e5271a5cc7f9b6273c6e28.mockapi.io/User")
//     const data =await response.json()
//     // console.table(data)
//     // console.log(response)
//     return data
//     }
//     catch(error){
//         console.log(error)
//     }
// }

// async function APIDATA() {
//     const apidata = await API()
//     // const structuredata = apidata.map((data) => {console.log(data)})
//     const activeusers = await apidata.filter((data) => data.isactive)
//     console.log(activeusers)
//     // console.log(apidata)
// }
// APIDATA()

function bot(){
    return new Promise((resolve,reject) => {
        const a = true
        setTimeout(()=>{
            if(a){
                resolve("Success")
            }
            else{
                reject("Error")
            }
        },3000)
    })
}

// async function datax() {
//     try{
//         const response = await bot()
//         console.log(response)
//     }
//     catch(e){
//         console.log(e)
//     }
// }
// datax()

bot().then(data=>{console.log(data)}).catch(e => {console.log(e)})