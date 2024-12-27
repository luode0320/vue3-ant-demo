<template>
	<!-- 使用 a-space 组件来组织布局，并设置 direction="vertical" 来垂直排列子元素 -->
	<a-space direction="vertical">
		<!-- 第一行按钮：主要按钮（Primary Button）及其禁用状态 -->
		<a-space>
			<!-- 启用的主要按钮 -->
			<a-button type="primary">主要按钮</a-button>
			<!-- 禁用的主要按钮 -->
			<a-button type="primary" disabled>主要按钮(禁用)</a-button>
		</a-space>

		<!-- 第二行按钮：默认按钮（Default Button）及其禁用状态 -->
		<a-space>
			<!-- 启用的默认按钮 -->
			<a-button>默认按钮</a-button>
			<!-- 禁用的默认按钮 -->
			<a-button disabled>默认按钮(禁用)</a-button>
		</a-space>

		<!-- 第三行按钮：虚线按钮（Dashed Button）及其禁用状态 -->
		<a-space>
			<!-- 启用的虚线按钮 -->
			<a-button type="dashed">虚线按钮</a-button>
			<!-- 禁用的虚线按钮 -->
			<a-button type="dashed" disabled>虚线按钮(禁用)</a-button>
		</a-space>

		<!-- 第四行按钮：文本按钮（Text Button）及其禁用状态 -->
		<a-space>
			<!-- 启用的文本按钮 -->
			<a-button type="text">文本按钮</a-button>
			<!-- 禁用的文本按钮 -->
			<a-button type="text" disabled>文本按钮(禁用)</a-button>
		</a-space>

		<!-- 第五行按钮：链接按钮（Link Button）及其禁用状态 -->
		<a-space>
			<!-- 启用的链接按钮 -->
			<a-button type="link">链接按钮</a-button>
			<!-- 禁用的链接按钮 -->
			<a-button type="link" disabled>链接按钮(禁用)</a-button>
		</a-space>

		<!-- 第六行按钮：危险默认按钮（Danger Default Button）及其禁用状态 -->
		<a-space>
			<!-- 启用的危险默认按钮 -->
			<a-button danger>危险默认按钮</a-button>
			<!-- 禁用的危险默认按钮 -->
			<a-button danger disabled>危险默认按钮(禁用)</a-button>
		</a-space>

		<!-- 第七行按钮：危险文本按钮（Danger Text Button）及其禁用状态 -->
		<a-space>
			<!-- 启用的危险文本按钮 -->
			<a-button danger type="text">危险文本按钮</a-button>
			<!-- 禁用的危险文本按钮 -->
			<a-button danger type="text" disabled>危险文本按钮(禁用)</a-button>
		</a-space>

		<!-- 第八行按钮：危险链接按钮（Danger Link Button）及其禁用状态 -->
		<a-space>
			<!-- 启用的危险链接按钮 -->
			<a-button danger type="link">危险链接按钮</a-button>
			<!-- 禁用的危险链接按钮 -->
			<a-button danger type="link" disabled>危险链接按钮(禁用)</a-button>
		</a-space>

		<!-- 特殊区域：幽灵按钮（Ghost Button）及其禁用状态 -->
		<div :style="{ padding: '8px', background: 'rgb(190, 200, 200)' }">
			<!-- 幽灵按钮在不同的背景颜色下会显示不同的效果 -->
			<a-space>
				<!-- 启用的幽灵按钮 -->
				<a-button ghost>幽灵按钮</a-button>
				<!-- 禁用的幽灵按钮 -->
				<a-button ghost disabled>幽灵按钮(禁用)</a-button>
			</a-space>
		</div>
	</a-space>
</template>
<script setup>
	// 此处无需导入额外的依赖或定义方法，因为组件已经自包含。
</script>

<!-- 可选：如果你需要在 <style> 标签中添加样式，可以在这里添加 -->
<style scoped></style>
