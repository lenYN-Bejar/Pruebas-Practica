type Operation = 'multiply' | 'add' | 'divide'
type Result = number

const calculator = (a: number, b: number, op: Operation): Result => {
    if (op === 'multiply') return a * b
    if (op === 'add') return a + b
    if (op === 'divide') {
        if (b === 0) throw new Error('can\t divide by 0!')
        return a / b
    }
    throw new Error("operation is not valid")
}

const result = calculator(6, 3, 'divide')
console.log(result)