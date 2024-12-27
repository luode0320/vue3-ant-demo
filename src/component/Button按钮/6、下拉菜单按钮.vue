<template>
	<!-- 使用 a-space 组件来组织布局，并在其内部放置多个按钮 -->
	<a-space>
		<!-- 下拉菜单按钮组件（Dropdown Button） -->
		<a-dropdown>
			<!-- #overlay 插槽定义下拉菜单的内容 -->
			<template #overlay>
				<a-menu @click="handleMenuClick">
					<a-menu-item key="1">第1项</a-menu-item>
					<a-menu-item key="2">第2项</a-menu-item>
					<a-menu-item key="3">第3项</a-menu-item>
				</a-menu>
			</template>

			<!-- 鼠标悬停触发下拉菜单的按钮，显示 "操作" 文本和一个向下的图标 -->
			<a-button>
				操作
				<DownOutlined />
			</a-button>
		</a-dropdown>
	</a-space>
</template>
<script setup>
	import { ref } from 'vue';
	// 导入图标组件 DownOutlined （假设已经正确安装并配置）
	import { DownOutlined } from '@ant-design/icons-vue';

	// 定义处理菜单点击事件的方法
	const handleMenuClick = (e) => {
		// 当用户点击菜单项时，会触发此方法，并打印点击事件信息到控制台
		console.log('点击', e);
	};
</script>

<!-- 可选：如果你需要在 <style> 标签中添加样式，可以在这里添加 -->
<style scoped></style>
