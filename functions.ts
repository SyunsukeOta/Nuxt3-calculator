import type { Digit, Operator, FunctionMap } from "@/interfaces"

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

export const num = (n: Digit) => {
	console.log('num', n);
	
}

export const cal = (c: Operator) => {
	console.log('cal', c);
	
}

export const ans = () => {
	console.log("Ans");
	
}

export const reset = () => {
	console.log('Reset');
}

export const functionMap: FunctionMap = { num, cal ,ans, reset}
