<template>
	<!-- 使用 a-card 组件创建一个宽度为 300px 的卡片，并启用悬停效果 -->
	<a-card hoverable style="width: 300px">
		<!-- 使用 #cover 插槽定义卡片的封面图片 -->
		<template #cover>
			<img alt="示例" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />
		</template>

		<!-- 使用 #actions 插槽定义卡片底部的操作按钮 -->
		<template #actions>
			<!-- 操作按钮：设置 -->
			<setting-outlined key="setting" />
			<!-- 操作按钮：编辑 -->
			<edit-outlined key="edit" />
			<!-- 操作按钮：更多 -->
			<ellipsis-outlined key="ellipsis" />
		</template>

		<!-- 使用 a-card-meta 组件定义卡片的元数据，包括标题和描述 -->
		<a-card-meta title="卡片标题" description="这是描述内容">
			<!-- 使用 #avatar 插槽定义卡片的头像 -->
			<template #avatar>
				<a-avatar src="../../../public/favicon.ico" />
			</template>
		</a-card-meta>
	</a-card>
</template>

<script setup>
	// 导入所需的图标组件
	import { SettingOutlined, EditOutlined, EllipsisOutlined } from '@ant-design/icons-vue';

	// 此处无需定义额外的方法或响应式变量，因为组件已经自包含。
</script>

<!-- 可选：如果你需要在 <style> 标签中添加样式，可以在这里添加 -->
<style scoped></style>
