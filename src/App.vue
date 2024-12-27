<template>
	<a-layout class="container">
		<a-layout-sider width="200" style="background: #fff">
			<a-menu mode="inline" :default-selected-keys="[currentComponent ? currentComponent.name : '']">
				<a-menu-item v-for="component in availableComponents" :key="component.name" @click="loadDemo(component.name)">
					{{ component.name }}
				</a-menu-item>
			</a-menu>
		</a-layout-sider>
		<a-layout-content style="padding: 0 16px; background: #fff">
			<a-spin :spinning="loading">
				<component :is="currentComponent" v-if="currentComponent" />
			</a-spin>
		</a-layout-content>
	</a-layout>
</template>

<script setup>
	import { ref, markRaw, onMounted } from 'vue';
	import { message } from 'ant-design-vue';

	// 使用 import.meta.glob 动态导入所有 .vue 文件
	const componentFiles = import.meta.glob('./component/**/*.vue');
	const currentComponent = ref(null);
	const loading = ref(false);
	const availableComponents = ref([]);

	onMounted(async () => {
		// 提取组件名称和路径
		const components = Object.keys(componentFiles).map((file) => {
			return {
				name: file.match(/\.\/component\/(.*)\.vue$/)[1].replace(/\/index$/, ''),
				loader: componentFiles[file],
			};
		});

		// 将组件信息添加到 availableComponents
		availableComponents.value = components;

		console.log('有效的demo', availableComponents.value);
	});
	const loadDemo = async (componentName) => {
		try {
			loading.value = true;
			const component = await import('./component/' + componentName + '.vue');
			currentComponent.value = markRaw(component.default);
		} catch (error) {
			message.error(`Failed to load ${componentName}: ${error.message}`);
		} finally {
			loading.value = false;
		}
	};
</script>

<style scoped>
	.container {
		display: flex;
		height: 100vh;
	}

	/* 可选：调整 sider 样式 */
	.ant-layout-sider {
		overflow: auto;
	}
</style>
