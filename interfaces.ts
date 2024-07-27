export type Digit = '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9'
export type Operator = '+' | '-' | '*' | '/'
export type BlockType = 'num' | 'cal' | 'reset' | 'ans'
export type Block = {
	id: number
	name: string;
	type: BlockType;
}
export type FunctionMap = {
	num: (n: Digit) => void;
	cal: (c: Operator) => void;
	ans: () => void;
	reset: () => void;
}
export type Params = {
	nums: number;
	curr: number;
	prev: number;
	equa: number;
	calc: Operator | null;
	message: String;
}
