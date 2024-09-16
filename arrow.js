function fun1(){
    console.log("Fun1")
}
const fun2 = () =>{ for (let i=0;i<10;i++){
    console.log(i)
}
    console.log("Fun2")
}
const fun3 = () => console.log("Fun3")
    fun1()
    fun2()
    fun3()
