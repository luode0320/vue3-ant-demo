<template>
	<!-- 使用 a-space 组件来组织按钮，并设置 direction="vertical" 来垂直排列子元素 -->
	<a-space direction="vertical">
		<!-- 第一行按钮：展示不同大小的加载中按钮 -->
		<a-space>
			<!-- 带有 loading 状态的主要按钮，显示默认尺寸 -->
			<a-button type="primary" loading>Loading</a-button>
			<!-- 带有 loading 状态的主要按钮，显示小尺寸 -->
			<a-button type="primary" size="small" loading>小尺寸</a-button>
		</a-space>

		<!-- 第二行按钮：带有交互效果的加载中按钮 -->
		<a-space>
			<!-- 当鼠标悬停时触发加载状态的主要按钮 -->
			<a-button type="primary" :loading="loading" @mouseenter="loading = true">将鼠标悬停在此处</a-button>
			<!-- 点击后延迟1秒进入加载状态的主要按钮，并在6秒后自动关闭加载状态 -->
			<a-button type="primary" :loading="iconLoading" @click="enterIconLoading">
				<!-- 使用 #icon 插槽自定义按钮内的图标 -->
				<template #icon><PoweroffOutlined /></template>
				延迟1s
			</a-button>
		</a-space>

		<!-- 第三行按钮：展示不同形状和颜色的加载中按钮 -->
		<a-space>
			<!-- 默认样式的主要按钮，带有加载状态 -->
			<a-button type="primary" loading />
			<!-- 圆形的主要按钮，带有加载状态 -->
			<a-button type="primary" shape="circle" loading />
			<!-- 圆角的危险按钮（通常是红色），带有加载状态 -->
			<a-button danger shape="round" loading />
		</a-space>
	</a-space>
</template>

<script setup>
	import { ref } from 'vue';
	// 导入图标组件 PoweroffOutlined （假设已经正确安装并配置）
	import { PoweroffOutlined } from '@ant-design/icons-vue';

	// 定义响应式变量 loading 用于控制第一行按钮的加载状态
	const loading = ref(false);
	// 定义响应式变量 iconLoading 用于控制第二行按钮的加载状态
	const iconLoading = ref(false);

	// 定义点击事件处理函数 enterIconLoading，当按钮被点击时，设置加载状态并延迟关闭
	const enterIconLoading = () => {
		// 设置带有延迟属性的对象给 iconLoading，表示开启加载状态并指定延迟时间
		iconLoading.value = { delay: 1000 };

		// 设置一个定时器，在6秒后重置 iconLoading，即关闭加载状态
		setTimeout(() => {
			iconLoading.value = false; // 关闭加载状态
		}, 6000);
	};
</script>

<!-- 可选：如果你需要在 <style> 标签中添加样式，可以在这里添加 -->
<style scoped></style>
