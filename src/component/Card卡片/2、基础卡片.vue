<template>
	<!-- 默认大小的卡片 -->
	<a-card title="默认大小卡片" style="width: 300px">
		<!-- 使用 #extra 插槽定义卡片右上角的额外操作链接 -->
		<template #extra>
			<a href="#">更多</a>
		</template>

		<!-- 卡片内容 -->
		<p>卡片内容</p>
		<p>卡片内容</p>
		<p>卡片内容</p>
	</a-card>
	<br />

	<!-- 小尺寸的卡片 -->
	<a-card size="small" title="小尺寸卡片" style="width: 300px">
		<!-- 使用 #extra 插槽定义卡片右上角的额外操作链接 -->
		<template #extra>
			<a href="#">更多</a>
		</template>

		<!-- 卡片内容 -->
		<p>卡片内容</p>
		<p>卡片内容</p>
		<p>卡片内容</p>
	</a-card>
</template>

<script setup>
	// 此处无需导入额外的依赖或定义方法，因为组件已经自包含。
</script>

<!-- 可选：如果你需要在 <style> 标签中添加样式，可以在这里添加 -->
<style scoped></style>
