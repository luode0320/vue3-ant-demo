<template>
	<!-- 使用 a-space 组件来组织布局，并设置 size 属性为 [8px, 16px] 分别表示水平和垂直间距 -->
	<a-space :size="[8, 16]" wrap>
		<!-- 使用 v-for 指令循环生成 20 个按钮，每个按钮都有唯一的 key 值 -->
		<template v-for="_i in 20" :key="_i">
			<a-button>按钮</a-button>
		</template>
	</a-space>
</template>

<script setup>
	// 此处无需导入额外的依赖或定义方法，因为组件已经自包含。
</script>

<!-- 可选：如果你需要在 <style> 标签中添加样式，可以在这里添加 -->
<style scoped></style>
