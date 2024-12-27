<template>
	<div>
		<!-- 操作按钮区域 -->
		<div style="margin-bottom: 16px">
			<!-- 加载数据按钮，只有当有选中行时disabled才可用，点击后触发start重新加载 -->
			<a-button type="primary" :disabled="!hasSelected" :loading="state.loading" @click="start"> 刷新 </a-button>
			<span style="margin-left: 8px">
				<!-- 当前选中的行数提示 -->
				<template v-if="hasSelected">
					{{ `已选中 ${state.selectedRowKeys.length} 项` }}
				</template>
			</span>
		</div>
		<!-- 表格组件，展示数据并支持多选 -->
		<a-table :row-selection="{ selectedRowKeys: state.selectedRowKeys, onChange: onSelectChange }" :columns="columns" :data-source="data"> </a-table>
	</div>
</template>
<script setup>
	import { computed, reactive } from 'vue';

	// 定义表格列配置
	const columns = [
		{ title: 'Name', dataIndex: 'name' },
		{ title: 'Age', dataIndex: 'age' },
		{ title: 'Address', dataIndex: 'address' },
	];

	// 初始化表格数据
	const data = [];
	for (let i = 0; i < 46; i++) {
		data.push({
			key: i,
			name: `Edward King ${i}`,
			age: 32,
			address: `London, Park Lane no. ${i}`,
		});
	}

	// 使用 reactive 创建响应式状态对象
	const state = reactive({
		selectedRowKeys: [], // 用于存储当前选中的行键值数组
		loading: false, // 表示是否正在加载数据的状态
	});

	// 计算属性，判断是否有选中行
	const hasSelected = computed(() => state.selectedRowKeys.length > 0);

	// 点击重新加载按钮后的处理函数
	const start = () => {
		state.loading = true; // 开始加载状态
		// 模拟异步操作（如 AJAX 请求），完成后重置加载状态和选中行
		setTimeout(() => {
			state.loading = false;
			state.selectedRowKeys = [];
		}, 1000); // 这里用 setTimeout 模拟异步延迟
	};

	// 当表格行选择发生变化时调用此方法
	const onSelectChange = (selectedRowKeys) => {
		console.log('选中的行键值发生了变化：', selectedRowKeys);
		state.selectedRowKeys = selectedRowKeys; // 更新选中的行键值
	};
</script>

<!-- 可选：如果你需要在 <style> 标签中添加样式，可以在这里添加 -->
<style scoped></style>
