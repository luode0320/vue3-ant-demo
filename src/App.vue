<script setup>
// 导入 HelloWorld 和 TheWelcome 组件，它们将用于模板中。
import HelloWorld from './components/HelloWorld.vue';
import TheWelcome from './components/TheWelcome.vue';
</script>

<template>
	<header>
		<!-- 显示 Vue logo 图像，指定 alt 属性为 "Vue logo"，并设置了类名和宽高 -->
		<img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

		<div class="wrapper">
			<!-- 使用 HelloWorld 嵌入组件，并通过属性传递消息 "You did it!" -->
			<HelloWorld msg="You did it!" />
		</div>
	</header>

	<main>
		<!-- 使用 TheWelcome 嵌入组件 -->
		<TheWelcome />
	</main>
</template>

<style scoped>
/* 样式作用域仅限于当前组件 */
header {
	line-height: 1.5; /* 设置 header 内文本的行高 */
}

.logo {
	display: block; /* 将图像设置为块级元素 */
	margin: 0 auto 2rem; /* 上下外边距为 0，左右居中，底部外边距为 2rem */
}

/* 媒体查询：当屏幕最小宽度为 1024px 时应用以下样式 */
@media (min-width: 1024px) {
	header {
		display: flex; /* 使用弹性布局 */
		place-items: center; /* 对齐项目至中心 */
		padding-right: calc(var(--section-gap) / 2); /* 右侧内边距为 --section-gap 的一半 */
	}

	.logo {
		margin: 0 2rem 0 0; /* 修改 logo 的外边距 */
	}

	header .wrapper {
		display: flex; /* 使用弹性布局 */
		place-items: flex-start; /* 对齐项目至顶部 */
		flex-wrap: wrap; /* 允许子元素换行 */
	}
}
</style>
