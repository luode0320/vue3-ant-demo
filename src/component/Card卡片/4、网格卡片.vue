<template>
	<!-- 使用 a-card 组件创建一个带有标题 "卡片标题" 的卡片 -->
	<a-card title="卡片标题">
		<!-- 使用 a-card-grid 组件创建多个网格，每个网格占据 25% 的宽度，文本内容居中对齐 -->
		<a-card-grid style="width: 25%; text-align: center">Content</a-card-grid>

		<!-- 禁用悬停效果的网格 -->
		<a-card-grid style="width: 25%; text-align: center" :hoverable="false">内容</a-card-grid>
		<a-card-grid style="width: 25%; text-align: center">内容</a-card-grid>
		<a-card-grid style="width: 25%; text-align: center">内容</a-card-grid>
		<a-card-grid style="width: 25%; text-align: center">内容</a-card-grid>
		<a-card-grid style="width: 25%; text-align: center">内容</a-card-grid>
		<a-card-grid style="width: 25%; text-align: center">内容</a-card-grid>
		<a-card-grid style="width: 25%; text-align: center">内容</a-card-grid>
	</a-card>
</template>

<script setup>
	// 此处无需导入额外的依赖或定义方法，因为组件已经自包含。
</script>

<!-- 可选：如果你需要在 <style> 标签中添加样式，可以在这里添加 -->
<style scoped></style>
