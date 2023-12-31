const squre = (num) => {
   return num ** 3;
}
console.log(squre(2))
console.log(squre(3))

const ndfl = (money) => {
    money=Number(prompt("Введите уровень дохода"))
    return money-(money*0.13)
}
console.log(`Ваша заработная плата : ${ndfl()}`)

function numbMax() {
    a = prompt(`Введите 'a'`)
    b = prompt(`Введите 'b'`)
    c = prompt(`Введите 'c'`)
    if ((a>b),(a>c)) {
        console.log(`Наибольшее число 'a' ${a}`)
    }
    else if((b>a),(b>c)){
        console.log(`Наибольшее число 'b' ${b}`)
    }
    else{
        console.log(`Наибольшее число 'c' ${c}`)
    }
}
numbMax()

const sum = (a,b) => {
    return a+b;
}
const diff = (a,b) => {
    return a-b;
}
const div = (a,b) => {
    return a/b;
}
const mult = (a,b) => {
    return a*b;
}
console.log(sum(2,2))
console.log(diff(2,2))
console.log(div(2,2))
console.log(mult(2,2))