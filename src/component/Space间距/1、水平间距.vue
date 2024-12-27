<template>
	<!-- 使用 a-space 组件来组织布局，并在其内部放置多个组件, 默认是水平间距 -->
	<a-space>
		<!-- 简单文本 "Space" 用于占位或展示 -->
		Space组件:

		<!-- 主要按钮（Primary Button），通常用于强调重要的操作 -->
		<a-button type="primary">主要按钮</a-button>

		<!-- 文件上传组件（a-upload），包含一个按钮作为触发器 -->
		<a-upload>
			<a-button>
				<UploadOutlined />
				点击上传
			</a-button>
		</a-upload>

		<!-- 弹出确认框组件（a-popconfirm），用于在执行某些操作前提示用户确认 -->
		<a-popconfirm title="确定要删除此任务吗？" ok-text="是" cancel-text="否">
			<a-button>确认</a-button>
		</a-popconfirm>
	</a-space>
</template>
<script setup>
	import { ref } from 'vue';
	// 导入图标组件 UploadOutlined （假设已经正确安装并配置）
	import { UploadOutlined } from '@ant-design/icons-vue';
</script>

<!-- 可选：如果你需要在 <style> 标签中添加样式，可以在这里添加 -->
<style scoped></style>
