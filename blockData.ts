import type { Block } from "@/interfaces"

export const blockList: Block[][] = [
	[
		{ id: 1, name: '7', type: 'num' },
		{ id: 2, name: '8', type: 'num' },
		{ id: 3, name: '9', type: 'num' },
		{ id: 4, name: '/', type: 'cal'}
	],
	[
		{ id: 5, name: '4', type: 'num' },
		{ id: 6, name: '5', type: 'num' },
		{ id: 7, name: '6', type: 'num' },
		{ id: 9, name: '*', type: 'cal' }
	],
	[
		{ id: 10, name: '1', type: 'num' },
		{ id: 11, name: '2', type: 'num' },
		{ id: 12, name: '3', type: 'num' },
		{ id: 13, name: '-', type: 'cal' }
	],
	[
		{ id: 14, name: '0', type: 'num' },
		{ id: 15, name: 'AC', type: 'reset' },
		{ id: 16, name: '=', type: 'ans' },
		{ id: 17, name: '+', type: 'cal' }
	]
]