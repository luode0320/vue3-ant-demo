<template>
	<!-- 使用 a-checkbox-group 包裹多个 a-checkbox 来创建一个复选框组 -->
	<a-checkbox-group v-model:value="value" style="width: 100%">
		<!-- 使用 a-row 和 a-col 来创建响应式网格布局 -->
		<a-row>
			<!-- 每个 a-col 定义一列，span 设置列的宽度占比 -->
			<a-col :span="8">
				<!-- a-checkbox 组件用于创建单个复选框，绑定 value 属性 -->
				<a-checkbox value="A">A</a-checkbox>
			</a-col>
			<a-col :span="8">
				<a-checkbox value="B">B</a-checkbox>
			</a-col>
			<a-col :span="8">
				<a-checkbox value="C">C</a-checkbox>
			</a-col>
		</a-row>
	</a-checkbox-group>
</template>
<script setup>
	// 导入 Vue 的 ref 函数用于创建响应式数据
	import { ref } from 'vue';
	// 创建一个名为 value 的响应式变量，用于存储选中的复选框值
	// 这是一个数组，因为复选框组允许多个选择
	const value = ref([]);
</script>

<!-- 可选：如果你需要在 <style> 标签中添加样式，可以在这里添加 -->
<style scoped></style>
