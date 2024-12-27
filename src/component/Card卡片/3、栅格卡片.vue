<template>
	<!-- 使用 div 容器设置背景颜色和内边距 -->
	<div style="background-color: #ececec; padding: 20px">
		<!-- 使用 a-row 组件创建一行布局，并通过 :gutter 属性设置列之间的间距 -->
		<a-row :gutter="16">
			<!-- 第一列：使用 a-col 组件设置栅格宽度为 8（占总宽度的 1/3）,（Ant Design 的栅格系统默认分为 24 栅格） -->
			<a-col :span="8">
				<!-- 卡片组件，设置标题为 "卡片标题" 并禁用边框 -->
				<a-card title="卡片标题" :bordered="false">
					<p>卡片内容</p>
				</a-card>
			</a-col>

			<!-- 第二列：使用 a-col 组件设置栅格宽度为 8（占总宽度的 1/3） -->
			<a-col :span="8">
				<!-- 卡片组件，设置标题为 "卡片标题" 并禁用边框 -->
				<a-card title="卡片标题" :bordered="false">
					<p>卡片内容</p>
				</a-card>
			</a-col>

			<!-- 第三列：使用 a-col 组件设置栅格宽度为 8（占总宽度的 1/3） -->
			<a-col :span="8">
				<!-- 卡片组件，设置标题为 "卡片标题" 并禁用边框 -->
				<a-card title="卡片标题" :bordered="false">
					<p>卡片内容</p>
				</a-card>
			</a-col>
		</a-row>
	</div>
</template>

<script setup>
	// 此处无需导入额外的依赖或定义方法，因为组件已经自包含。
</script>

<!-- 可选：如果你需要在 <style> 标签中添加样式，可以在这里添加 -->
<style scoped></style>
