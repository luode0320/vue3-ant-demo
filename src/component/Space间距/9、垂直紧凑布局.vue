<template>
	<!-- 使用 a-space 组件来组织布局，默认情况下会为其内部的子元素提供水平间距 -->
	<a-space>
		<!-- 第一个紧凑按钮组：默认样式按钮，垂直排列 -->
		<a-space-compact direction="vertical">
			<a-button>按钮1</a-button>
			<a-button>按钮2</a-button>
			<a-button>按钮3</a-button>
		</a-space-compact>

		<!-- 第二个紧凑按钮组：虚线样式按钮，垂直排列 -->
		<a-space-compact direction="vertical">
			<a-button type="dashed">按钮1</a-button>
			<a-button type="dashed">按钮2</a-button>
			<a-button type="dashed">按钮3</a-button>
		</a-space-compact>

		<!-- 第三个紧凑按钮组：主要样式按钮，垂直排列 -->
		<a-space-compact direction="vertical">
			<a-button type="primary">按钮1</a-button>
			<a-button type="primary">按钮2</a-button>
			<a-button type="primary">按钮3</a-button>
		</a-space-compact>
	</a-space>
</template>

<script setup>
	// 此处无需导入额外的依赖或定义方法，因为组件已经自包含。
</script>

<!-- 可选：如果你需要在 <style> 标签中添加样式，可以在这里添加 -->
<style scoped></style>
