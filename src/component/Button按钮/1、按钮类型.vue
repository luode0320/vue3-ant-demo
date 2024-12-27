<template>
	<!-- a-space 组件用于在其子元素之间提供均匀的间隔，wrap 属性允许换行 -->
	<a-space wrap>
		<!-- 创建一个主要按钮（Primary Button），通常用于强调重要的操作 -->
		<a-button type="primary">主要按钮</a-button>
		<!-- 创建一个默认样式的按钮（Default Button），这是最普通的按钮样式 -->
		<a-button>普通按钮</a-button>
		<!-- 创建一个虚线按钮（Dashed Button），适用于次要或轻量级的操作 -->
		<a-button type="dashed">虚线按钮</a-button>
		<!-- 创建一个文本按钮（Text Button），只显示文字，没有背景颜色或边框 -->
		<a-button type="text">文本按钮</a-button>
		<!-- 创建一个链接按钮（Link Button），外观像链接，可以用来替代 <a> 标签 -->
		<a-button type="link">链接按钮</a-button>
	</a-space>
</template>
