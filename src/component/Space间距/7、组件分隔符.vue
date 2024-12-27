<template>
	<!-- 使用 a-space 组件来组织布局，并在其内部放置多个组件 -->
	<a-space>
		<!-- 使用 #split 插槽定义子元素之间的分隔符 -->
		<template #split>
			<!-- 垂直分隔线组件 (a-divider)，type="vertical" 设置为垂直方向的分隔线 -->
			<a-divider type="vertical" />
		</template>

		<!-- 第一个链接组件 (a-typography-link)，显示文本 "Link" -->
		<a-typography-link>链接</a-typography-link>
		<!-- 第二个链接组件 (a-typography-link)，显示文本 "Link" -->
		<a-typography-link>链接</a-typography-link>

		<!-- 第三个链接组件 (a-typography-link)，显示文本 "Link" -->
		<a-typography-link>链接</a-typography-link>
	</a-space>
</template>

<script setup>
	// 此处无需导入额外的依赖或定义方法，因为组件已经自包含。
</script>

<!-- 可选：如果你需要在 <style> 标签中添加样式，可以在这里添加 -->
<style scoped></style>
