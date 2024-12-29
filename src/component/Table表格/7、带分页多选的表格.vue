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

		<!-- 使用 a-table 组件创建表格
        columns: 表格列配置
        row-key: 设置行键，确保每行数据唯一
        data-source: 数据源
        pagination: 分页配置
        loading: 加载状态
        change: 处理表格变化事件
        bordered: 有边的
        row-selection: 行选择功能
        row-selection.selectedRowKeys: 当前已经选中项的 key 数组，需要和 onChange 进行配合更新
        row-selection.onSelectChange: 选中项发生变化时的回调
		-->
		<a-table
			:row-selection="{ selectedRowKeys: state.selectedRowKeys, onChange: onSelectChange }"
			:columns="columns"
			:data-source="data"
			:pagination="paginationConfig"
			@change="handleTableChange"
			bordered
		>
		</a-table>
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

	// 初始化数据源，模拟从服务器获取的数据
	const data = [];
	for (let i = 0; i < 46; i++) {
		data.push({
			key: i, // 确保 key 是字符串类型
			name: `Edward King ${i}`,
			age: 32,
			address: `伦敦，公园大道. ${i}`,
		});
	}

	// 使用 reactive 创建响应式状态对象
	const state = reactive({
		selectedRowKeys: [], // 用于存储当前选中的行键值数组
		loading: false, // 表示是否正在加载数据的状态
	});

	// 分页配置：根据数据源动态计算是否显示分页控件
	const paginationConfig = computed(() => ({
		total: data.length,
		showSizeChanger: true, // 允许用户选择每页显示多少条记录
		defaultCurrent: 1, // 默认当前页码
		defaultPageSize: 2, // 默认每页显示的数量
		showTotal: function (total) {
			return `共 ${total} 条`;
		},
	}));
	// 计算属性，判断是否有选中行
	const hasSelected = computed(() => state.selectedRowKeys.length > 0);

	// 点击重新加载按钮后的处理函数
	const start = () => {
		state.loading = true; // 开始加载状态

		// 模拟异步操作（如 AJAX 请求），完成后重置加载状态和选中行
		setTimeout(() => {
			state.loading = false; // 操作完成后关闭加载状态
			state.selectedRowKeys = []; // 清空已选中的行
		}, 1000); // 这里用 setTimeout 模拟异步延迟
	};

	// 处理表格变化事件（如分页、排序、筛选等）
	const handleTableChange = (newPagination, filters, sorter) => {
		console.log('Various parameters', newPagination, filters, sorter);
		pagination.current = newPagination.current;
		pagination.pageSize = newPagination.pageSize;
		// 根据需要更新数据源和分页信息
		// 可以在这里调用 API 获取新数据
		// 通常我们改成分页的时候是需要重新请求接口获取的
	};

	// 当表格行选择发生变化时调用此方法, selectedRowKeys是最新被选择的所有key
	const onSelectChange = (selectedRowKeys) => {
		console.log('选中的行键值发生了变化：', selectedRowKeys);
		state.selectedRowKeys = selectedRowKeys; // 更新选中的行键值
	};
</script>

<!-- 可选：如果你需要在 <style> 标签中添加样式，可以在这里添加 -->
<style scoped></style>
