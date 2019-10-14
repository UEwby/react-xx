function logActivity(activity = 'skiing') {
    console.log(activity)
}
// logActivity()

// bind call apply
function Product(name, price) {
    this.name = name
    this.price = price
}

function Food(name, price) {
    Product.call(this, name, price)
    this.category = 'food'
}
function Water(name, price) {
    Product.apply(this, [name, price])
    this.category = 'water'
}

console.log(new Food('cheese', 5).name)
console.log(new Water('dddddd', 34).name)

const add = (state, { payload }) => {
    return state.concat(payload)
}
const add1 = (state, { payload: todo }) => {
    return state.concat(todo)
}
console.log(add([2,3,4,5,6,7,8], {payload: {a:44,b:23}}))
console.log(add1([2,3,4,5,6,7,8], {payload: {a:44,b:23}}))

const name = 'duoduo'
const age = 8
const user = { name, age }
console.log(user)

// app.model({
//     reducers: {
//         add () {
//             console.log(2222)
//         }
//     },
//     effects: {
//         *addRemote () {
//
//         }
//     }
// })

const todos = ['Learn dva', 'Learn umi']
console.log([...todos])

const arr = ['a', 'b', 'c']
const [first, ...rest] = arr
console.log(rest)