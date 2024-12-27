<template>
	<!-- 使用 div 容器包裹所有内容，并应用类名 space-align-container 来设置整体布局 -->
	<div class="space-align-container">
		<!-- 每个 space-align-block 包含一个 a-space 组件，用于展示不同的对齐方式 -->

		<!-- 第一个区块：居中对齐 (align="center") -->
		<div class="space-align-block">
			<!-- 使用 a-space 组件，设置 align="center" 实现子元素垂直居中对齐 -->
			<a-space align="center">
				居中对齐
				<a-button type="primary">主要按钮</a-button>
				<span class="mock-block">块元素</span>
			</a-space>
		</div>

		<!-- 第二个区块：顶部对齐 (align="start") -->
		<div class="space-align-block">
			<!-- 使用 a-space 组件，设置 align="start" 实现子元素顶部对齐 -->
			<a-space align="start">
				顶部对齐
				<a-button type="primary">主要按钮</a-button>
				<span class="mock-block">块元素</span>
			</a-space>
		</div>

		<!-- 第三个区块：底部对齐 (align="end") -->
		<div class="space-align-block">
			<!-- 使用 a-space 组件，设置 align="end" 实现子元素底部对齐 -->
			<a-space align="end">
				底部对齐
				<a-button type="primary">主要按钮</a-button>
				<span class="mock-block">块元素</span>
			</a-space>
		</div>

		<!-- 第四个区块：基线对齐 (align="baseline") -->
		<div class="space-align-block">
			<!-- 使用 a-space 组件，设置 align="baseline" 实现子元素基于文本基线对齐 -->
			<a-space align="baseline">
				文本基线对齐
				<a-button type="primary">主要按钮</a-button>
				<span class="mock-block">块元素</span>
			</a-space>
		</div>
	</div>
</template>

<style scoped>
	/* 设置容器的整体布局 */
	.space-align-container {
		display: flex;
		align-items: flex-start; /* 子元素从顶部开始对齐 */
		flex-wrap: wrap; /* 允许子元素换行 */
	}
	/* 设置每个区块的样式 */
	.space-align-block {
		margin: 8px 4px; /* 外边距 */
		border: 1px solid #40a9ff; /* 边框 */
		padding: 4px; /* 内边距 */
		flex: none; /* 不允许拉伸或收缩 */
	}
	/* 设置模拟块元素的样式 */
	.space-align-block .mock-block {
		display: inline-block; /* 行内块显示 */
		padding: 32px 8px 16px; /* 内边距 */
		background: rgba(150, 150, 150, 0.2); /* 背景颜色 */
	}
</style>
