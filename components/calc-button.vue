<script setup lang="ts">
import type { Block } from "@/interfaces";

const props = defineProps<{ block: Block }>()
const emit = defineEmits<{ (event: 'blockClick', block: Block): void }>()

const runner = () => {
	emit('blockClick', props.block)
}
</script>

<template>
	<button @click="runner">{{ block.name }}</button>
</template>