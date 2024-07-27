import type { Digit, Operator, FunctionMap} from "@/interfaces"
import { useParams} from "@/composables/useParams"

const DIGITS: Digit[] = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const OPERATORS: Operator[] = ['+', '-', '*', '/'];


export const isDigit = (key: string): key is Digit => DIGITS.includes(key as Digit);
export const isOperator = (key: string): key is Operator => OPERATORS.includes(key as Operator);

export const keyAction = (e: KeyboardEvent) => {
	if (isDigit(e.key)) num(e.key)
	else if (isOperator(e.key)) cal(e.key)
	else if (e.key == 'Backspace') reset()
	else if (e.key == '=') ans()
}

export const changeCal = () => {
	const params= useParams()
	switch (params.value.calc) {
		case '+':
			return params.value.prev + params.value.curr
		case '-':
			return params.value.prev - params.value.curr
		case '*':
			return params.value.prev * params.value.curr
		case '/':
			return Number((params.value.prev / params.value.curr).toFixed(4))
		default:
			return params.value.curr
	}
}

export const changeNum = () => {
	const params= useParams()
	params.value.prev = params.value.curr
	params.value.curr = 0
	params.value.message = String(params.value.calc)
}

export const viewAns = () => {
	const params= useParams()
	params.value.curr = changeCal()
	params.value.prev = 0
	params.value.calc = null
	params.value.message = String(params.value.curr)
}

export const num = (n: Digit) => {
	const params= useParams()
	if (params.value.equa) {
		params.value.curr = 0
		params.value.equa = false
	}
	params.value.curr = params.value.curr*10 + Number(n)
	params.value.message = String(params.value.curr)
}

export const cal = (c: Operator) => {
	const params= useParams()
	if (params.value.calc != null) viewAns()
	params.value.calc = c
	changeNum()
}

export const ans = () => {
	const params= useParams()
	if (params.value.curr != 0 && params.value.prev != 0) viewAns()
	params.value.equa = true
}

export const reset = () => {
	const params= useParams()
	params.value.curr = 0
	params.value.prev = 0
	params.value.calc = null
	params.value.message = '0'
	params.value.equa = false
}

export const functionMap: FunctionMap = { num, cal, ans, reset }
