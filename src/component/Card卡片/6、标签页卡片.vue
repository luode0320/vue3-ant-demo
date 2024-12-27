<template>
	<!-- 第一个 a-card 组件，设置宽度为100%，并指定了标题和标签列表 -->
	<a-card style="width: 100%" title="卡片标题" :tab-list="tabList" :active-tab-key="key" @tabChange="(key) => onTabChange(key, 'key')">
		<!-- 自定义标签模板，仅当标签key为 'tab1' 时显示 Home 图标, customItem 是 tabList 中的一个对象, 可以覆盖默认行为 -->
		<template #customTab="customItem">
			<span v-if="customItem.key === 'tab1'">
				<home-outlined />
				{{ customItem.tab }}
			</span>
		</template>

		<!-- 卡片额外的操作链接 -->
		<template #extra>
			<a href="#">更多</a>
		</template>

		<!-- 动态显示与当前激活标签对应的tab内容 -->
		{{ contentList[key] }}
	</a-card>
	<br />
	<br />

	<!-- 第二个 a-card 组件，不设置标题，但有标签列表 -->
	<a-card style="width: 100%" :tab-list="tabListNoTitle" :active-tab-key="noTitleKey" @tabChange="(key) => onTabChange(key, 'noTitleKey')">
		<!-- 根据 noTitleKey 的值显示不同的内容 -->
		<p v-if="noTitleKey === 'article'">文章内容</p>
		<p v-else-if="noTitleKey === 'app'">应用程序内容</p>
		<p v-else>项目内容</p>

		<!-- 在标签栏右侧显示额外内容 -->
		<template #tabBarExtraContent>
			<a href="#">更多</a>
		</template>
	</a-card>
</template>
<script setup>
	import { ref } from 'vue';
	// 导入所需的图标组件（例如 HomeOutlined）
	import { HomeOutlined } from '@ant-design/icons-vue';

	// 使用 ref 创建响应式变量 key 和 noTitleKey 来跟踪当前激活的标签
	const key = ref('tab1');
	const noTitleKey = ref('app');

	// 定义标签列表，每个对象包含 key 和 tab 属性
	const tabList = [
		{ key: 'tab1', tab: '标签1' },
		{ key: 'tab2', tab: '标签2' },
	];

	// 定义与标签对应的卡片内容
	const contentList = {
		tab1: '内容1',
		tab2: '内容2',
	};

	// 定义无标题的标签列表
	const tabListNoTitle = [
		{ key: 'article', tab: '文章' },
		{ key: 'app', tab: '应用程序' },
		{ key: 'project', tab: '项目' },
	];

	// 定义标签切换处理函数
	const onTabChange = (value, type) => {
		console.log(value, type); // 打印选择的标签键和类型以供调试

		// 根据传入的类型更新相应的激活标签键
		if (type === 'key') {
			key.value = value;
		} else if (type === 'noTitleKey') {
			noTitleKey.value = value;
		}
	};
</script>
