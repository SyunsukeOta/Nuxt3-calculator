<script setup lang="ts">
import { blockList } from "@/blockData"
import type { Digit, Operator, BlockType, FunctionMap, Block } from "@/interfaces"
import { isDigit, isOperator, keyAction, functionMap } from "@/functions"

const buttonList: Block[][] = blockList
const message = ref('0')


onMounted(() => {
	document.addEventListener('keydown', keyAction)
})

onBeforeUnmount(() => {
	document.removeEventListener('keydown', keyAction)
})


const handleBlockClick = (block: Block) => {
	console.log(block.id, block.name, block.type);
	const func = functionMap[block.type]
	if (func) {
		if (block.type === 'num') {
			const digit = block.name as Digit
			if (isDigit(digit)) {
				(func as (n: Digit) => void)(digit)
			}
		} else if (block.type === 'cal') {
			const operator = block.name as Operator
			if (isOperator(operator)) {
				(func as (c: Operator) => void)(operator)
			}
		} else {
			(func as () => void)()
		}
	} else {
		console.error(`No function mapped for type: ${block.type}`)
	}
};


</script>

<template>
	<div class="container" id="app1">
		<p class="display">{{ message }}</p>
		<div id="buttons">
			<div v-for="(row, rowIndex) in buttonList" :key="rowIndex" class="row">
				<CalcButton v-for="button in row" :key="button.name" :block="button" @blockClick="handleBlockClick"/>
			</div>
		</div>
	</div>
</template>