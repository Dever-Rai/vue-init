<script setup lang="ts">
interface Props {
	msg: string;
}

const { msg } = defineProps<Props>();
</script>

<template>
	<div class="button" id="name">{{ msg }}</div>
</template>

<style lang="scss" scoped></style>
