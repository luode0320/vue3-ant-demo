<template>
	<!-- 使用 a-space 组件来组织布局，并设置 direction="vertical" 来垂直排列子元素 -->
	<a-space direction="vertical">
		<!-- 第一行按钮：展示不同类型和样式的圆形按钮与带图标的按钮 -->
		<a-space warp>
			<!-- 带有工具提示的圆形主要按钮，点击后不会导航，只显示搜索图标 -->
			<a-tooltip title="搜索">
				<a-button type="primary" shape="circle">
					<template #icon><SearchOutlined /></template>
				</a-button>
			</a-tooltip>

			<!-- 简单的圆形主要按钮，显示字母 A -->
			<a-button type="primary" shape="circle">A</a-button>

			<!-- 主要按钮，包含文本 "Search" 和搜索图标 -->
			<a-button type="primary">
				<template #icon><SearchOutlined /></template>搜索
			</a-button>

			<!-- 带有工具提示的圆形按钮，没有背景色或边框，仅显示搜索图标 -->
			<a-tooltip title="搜索">
				<a-button shape="circle">
					<template #icon><SearchOutlined /></template>
				</a-button>
			</a-tooltip>

			<!-- 普通按钮，包含文本 "Search" 和搜索图标 -->
			<a-button>
				<template #icon><SearchOutlined /></template>搜索
			</a-button>
		</a-space>

		<!-- 第二行按钮：进一步展示不同样式（如虚线）和功能（如链接）的按钮 -->
		<a-space warp>
			<!-- 带有工具提示的圆形按钮，没有背景色或边框，仅显示搜索图标 -->
			<a-tooltip title="搜索">
				<a-button shape="circle">
					<template #icon><SearchOutlined /></template>
				</a-button>
			</a-tooltip>

			<!-- 普通按钮，包含文本 "Search" 和搜索图标 -->
			<a-button>
				<template #icon><SearchOutlined /></template>搜索
			</a-button>

			<!-- 带有工具提示的圆形虚线按钮，仅显示搜索图标 -->
			<a-tooltip title="搜索">
				<a-button type="dashed" shape="circle">
					<template #icon><SearchOutlined /></template>
				</a-button>
			</a-tooltip>

			<!-- 虚线按钮，包含文本 "Search" 和搜索图标 -->
			<a-button type="dashed">
				<template #icon><SearchOutlined /></template>搜索
			</a-button>

			<!-- 链接按钮，点击后会在新窗口中跳转到指定 URL -->
			<a-button :href="googleLink" target="_blank">
				<template #icon><SearchOutlined /></template>前往 Google
			</a-button>
		</a-space>
	</a-space>
</template>
<script setup>
	import { ref } from 'vue';
	// 导入图标组件 SearchOutlined （假设已经正确安装并配置）
	import { SearchOutlined } from '@ant-design/icons-vue';

	// 定义一个响应式变量用于存储链接地址
	const googleLink = ref('https://www.google.com');
</script>

<!-- 可选：如果你需要在 <style> 标签中添加样式，可以在这里添加 -->
<style scoped></style>
