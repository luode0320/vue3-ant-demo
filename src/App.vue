<template>
	<div class="container">
		<div class="button-container">
			<button v-for="componentName in availableComponents" :key="componentName" @click="loadDemo(componentName)">{{ componentName }}</button>
		</div>

		<div class="component-container">
			<component :is="currentComponent"></component>
		</div>
	</div>
</template>

<script setup>
	import { ref, markRaw, onMounted } from 'vue';

	// 使用 import.meta.glob 动态导入所有 .vue 文件
	const componentFiles = import.meta.glob('./component/*.vue');
	const currentComponent = ref(null);
	const availableComponents = ref([]);

	onMounted(async () => {
		// 提取组件名称
		const components = Object.keys(componentFiles).map((file) => {
			return {
				name: file.match(/\.\/component\/(.*)\.vue$/)[1],
				loader: componentFiles[file],
			};
		});

		// 将组件名称添加到 availableComponents
		availableComponents.value = components.map((c) => c.name);

		console.log('有效的demo', availableComponents.value);
	});
	const loadDemo = async (componentName) => {
		try {
			// 查找对应的加载器并加载组件
			const component = await import(`./component/${componentName}.vue`);
			currentComponent.value = markRaw(component.default);
		} catch (error) {
			console.error(`Failed to load ${componentName}:`, error);
		}
	};
</script>

<style scoped>
	.container {
		display: flex;
		gap: 16px; /* 两列之间的间距 */
	}

	.button-container {
		display: flex;
		flex-direction: column; /* 按钮垂直排列 */
		gap: 8px; /* 按钮之间的间距 */
		width: 200px; /* 设置左边栏宽度 */
	}

	.component-container {
		flex-grow: 1; /* 让右边栏占据剩余空间 */
		border-left: 1px solid #ccc; /* 可选：添加分隔线 */
		padding-left: 16px; /* 可选：添加内边距 */
	}

	/* 可选：为按钮添加一些样式 */
	button {
		width: 100%; /* 使按钮宽度一致 */
		text-align: left; /* 文本靠左对齐 */
		padding: 8px 16px; /* 可选：为按钮添加内边距 */
	}
</style>
