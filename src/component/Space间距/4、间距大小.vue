<template>
	<div>
		<!-- 使用 a-radio-group 组件创建一组单选按钮，用于选择不同的间距大小 -->
		<a-radio-group v-model:value="size">
			<!-- 单选按钮项，每个都有唯一的 value 属性，对应不同的间距大小 -->
			<a-radio value="small">小</a-radio>
			<a-radio value="middle">中</a-radio>
			<a-radio value="large">大</a-radio>
		</a-radio-group>
		<br /><br />

		<!-- 使用 a-space 组件来组织布局，并通过 :size="size" 绑定单选按钮组的值，以动态控制子元素间的间距 -->
		<a-space :size="size">
			<!-- 主要按钮（Primary Button），通常用于强调重要的操作 -->
			<a-button type="primary">主要按钮</a-button>
			<!-- 默认按钮（Default Button），这是最普通的按钮样式 -->
			<a-button>默认按钮</a-button>
			<!-- 虚线按钮（Dashed Button），适用于次要或轻量级的操作 -->
			<a-button type="dashed">虚线按钮</a-button>
			<!-- 链接按钮（Link Button），外观像链接，可以用来替代 <a> 标签 -->
			<a-button type="link">链接按钮</a-button>
		</a-space>
	</div>
</template>
<script setup>
	import { ref } from 'vue';

	// 定义一个响应式变量 size，默认值为 'small'，用于存储当前选择的间距大小，并绑定到 a-space 的 size 属性
	const size = ref('small');
</script>

<!-- 可选：如果你需要在 <style> 标签中添加样式，可以在这里添加 -->
<style scoped></style>
