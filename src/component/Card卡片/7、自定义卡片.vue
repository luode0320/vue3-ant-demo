<template>
	<!-- 使用 a-card 组件创建一个卡片，并启用悬停效果 -->
	<a-card hoverable style="width: 240px">
		<!-- 使用 #cover 插槽定义卡片的封面图片 -->
		<template #cover>
			<!-- 封面图片，alt 属性提供替代文本，src 属性指定图片 URL -->
			<img alt="示例" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />
		</template>

		<!-- 使用 a-card-meta 组件定义卡片的元数据，包括标题 -->
		<a-card-meta title="欧洲街头音乐">
			<!-- 使用 #description 插槽自定义描述内容 -->
			<!-- 描述内容：Instagram 页面链接 -->
			<template #description>www.instagram.com</template>
		</a-card-meta>
	</a-card>
</template>

<script setup>
	// 此处无需导入额外的依赖或定义方法，因为组件已经自包含。
</script>

<!-- 可选：如果你需要在 <style> 标签中添加样式，可以在这里添加 -->
<style scoped></style>
