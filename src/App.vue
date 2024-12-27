<template>
	<a-layout class="container">
		<a-layout-sider width="200" style="background: #fff">
			<a-menu mode="inline" :default-selected-keys="[currentComponent ? currentComponent.name : '']">
				<template v-for="item in menuStructure" :key="item.key">
					<a-sub-menu v-if="item.children" :key="item.key" :title="item.title">
						<template v-for="subItem in item.children" :key="subItem.key">
							<a-sub-menu v-if="subItem.children" :key="subItem.key" :title="subItem.title">
								<a-menu-item v-for="child in subItem.children" :key="child.key" :title="child.title" @click="loadDemo(child.key)">
									{{ child.title }}
								</a-menu-item>
							</a-sub-menu>
							<a-menu-item v-else :key="subItem.loader" @click="loadDemo(subItem.key)">
								{{ subItem.title }}
							</a-menu-item>
						</template>
					</a-sub-menu>
					<a-menu-item v-else :key="item.loader" @click="loadDemo(item.key)">
						{{ item.title }}
					</a-menu-item>
				</template>
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

	// 使用 import.meta.glob 动态导入所有 .vue 文件，包括子目录
	const componentFiles = import.meta.glob('./component/**/*.vue');
	const currentComponent = ref(null);
	const loading = ref(false);
	const menuStructure = ref([]);

	// 解析文件路径并构建多层级菜单结构
	function buildMenuStructure(files) {
		const structure = {};

		Object.keys(files).forEach((file) => {
			const pathParts = file.match(/\.\/component\/(.*)\.vue$/)[1].split('/');
			let currentLevel = structure;

			pathParts.forEach((part, index) => {
				if (index === pathParts.length - 1) {
					// 如果是最后一个部分，则认为是组件文件
					currentLevel[part] = {
						name: part.replace('.vue', ''),
						loader: files[file],
					};
				} else {
					// 否则，创建或进入下一层级
					if (!currentLevel[part]) {
						currentLevel[part] = {};
					}
					currentLevel = currentLevel[part];
				}
			});
		});

		return flattenMenu(structure);
	}

	// 将嵌套的对象结构转换为扁平的菜单数组
	function flattenMenu(obj, parentKey = '') {
		return Object.keys(obj).reduce((acc, key) => {
			const fullPath = parentKey ? `${parentKey}/${key}` : key;
			const value = obj[key];
			if (typeof value === 'object' && !Array.isArray(value) && value !== null && !value.name && !value.loader) {
				acc.push({
					key: fullPath,
					title: key,
					children: flattenMenu(value, fullPath),
				});
			} else {
				acc.push({
					key: fullPath,
					title: key,
					loader: value.loader,
				});
			}

			return acc;
		}, []);
	}

	onMounted(async () => {
		// 构建多层级菜单结构
		menuStructure.value = buildMenuStructure(componentFiles);
	});

	const loadDemo = async (fullPath) => {
		try {
			loading.value = true;
			const component = await import('./component/' + fullPath + '.vue');
			currentComponent.value = markRaw(component.default);
		} catch (error) {
			message.error(`Failed to load ${fullPath}: ${error.message}`);
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
