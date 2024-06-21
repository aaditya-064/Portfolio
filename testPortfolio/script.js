const list = [1,2,3,4,5]
// const newList = []
// output: [1,2,"three",4,5]

// list.forEach(i => {
//     if(i === 3){
//         newList.push('three')
//     }else{
//         newList.push(i)
//     }
// })
// const updateList = list.map(i => {
//     if(i === 3) {
//         return 'three'
//     }else{
//         return i
//     }
// })
const sum = list.reduce((sum,acc)=>{
return sum+acc
},0)

console.log(sum)

