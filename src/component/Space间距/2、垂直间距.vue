<template>
	<!-- 使用 a-space 组件来组织布局，并设置 direction="vertical" 来垂直排列子元素 -->
	<a-space direction="vertical">
		<!-- 第一张卡片组件 (a-card)，设置了宽度为 300px 和标题 "Card" -->
		<a-card title="卡片1" style="width: 300px">
			<p>卡片内容</p>
			<p>卡片内容</p>
		</a-card>

		<!-- 第二张卡片组件 (a-card)，同样设置了宽度为 300px 和标题 "Card" -->
		<a-card title="卡片2" style="width: 300px">
			<p>卡片内容</p>
			<p>卡片内容</p>
		</a-card>
	</a-space>
</template>

<script setup>
	// 此处无需导入额外的依赖或定义方法，因为组件已经自包含。
</script>

<!-- 可选：如果你需要在 <style> 标签中添加样式，可以在这里添加 -->
<style scoped></style>
