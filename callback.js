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
async function API() {
    try{
    const response = await fetch("https://66e5271a5cc7f9b6273c6e28.mockapi.io/User")
    const data =await response.json()
    // console.table(data)
    // console.log(response)
    return data
    }
    catch(error){
        console.log(error)
    }
}

async function APIDATA() {
    const apidata = await API()
    // const structuredata = apidata.map((data) => {console.log(data)})
    const activeusers = await apidata.filter((data) => data.isactive)
    console.log(activeusers)
    // console.log(apidata)
}
APIDATA()