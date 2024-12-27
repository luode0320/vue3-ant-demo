<template>
	<!-- 使用 a-space 组件来组织布局，并设置 direction="vertical" 来垂直排列子元素 -->
	<a-space direction="vertical">
		<!-- 使用 a-radio-group 和 a-radio-button 创建一组用于切换按钮尺寸的单选按钮 -->
		<a-radio-group v-model:value="size">
			<a-radio-button value="large">大尺寸</a-radio-button>
			<a-radio-button value="default">默认尺寸</a-radio-button>
			<a-radio-button value="small">小尺寸</a-radio-button>
		</a-radio-group>

		<!-- 第一行按钮：展示不同类型的按钮，它们的尺寸会根据上面的选择而变化 -->
		<a-space>
			<a-button type="primary" :size="size">主要按钮</a-button>
			<a-button :size="size">普通按钮</a-button>
			<a-button type="dashed" :size="size">虚线按钮</a-button>
			<a-button danger :size="size">危险按钮</a-button>
			<a-button type="link" :size="size">链接按钮</a-button>
		</a-space>

		<!-- 第二行按钮：展示带有图标的按钮，以及圆形和圆角形状的按钮 -->
		<a-space>
			<!-- 主要按钮，仅包含图标 -->
			<a-button type="primary" :size="size">
				<template #icon>
					<DownloadOutlined />
				</template>
			</a-button>
			<!-- 圆形的主要按钮，仅包含图标 -->
			<a-button type="primary" shape="circle" :size="size">
				<template #icon>
					<DownloadOutlined />
				</template>
			</a-button>
			<!-- 圆角的主要按钮，包含图标和文字 -->
			<a-button type="primary" shape="round" :size="size">
				<template #icon>
					<DownloadOutlined />
				</template>
				下载
			</a-button>
			<!-- 圆角的主要按钮，仅包含图标 -->
			<a-button type="primary" shape="round" :size="size">
				<template #icon>
					<DownloadOutlined />
				</template>
			</a-button>
			<!-- 主要按钮，包含图标和文字 -->
			<a-button type="primary" :size="size">
				<template #icon>
					<DownloadOutlined />
				</template>
				下载
			</a-button>
		</a-space>
	</a-space>
</template>
<script setup>
	import { ref } from 'vue';
	// 导入图标组件 DownloadOutlined （假设已经正确安装并配置）
	import { DownloadOutlined } from '@ant-design/icons-vue';
	// 定义响应式变量 size 用于存储当前选中的按钮尺寸，默认为 "large"
	const size = ref('large');
</script>
