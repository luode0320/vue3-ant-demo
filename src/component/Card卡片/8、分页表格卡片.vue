<template>
	<a-card title="带分页和多选的卡片表格" style="width: 100%">
		<!-- 使用 a-table 组件创建表格
			columns: 表格列配置
			row-key: 设置行键，确保每行数据唯一
			data-source: 数据源
			pagination: 分页配置
			loading: 加载状态
			change: 处理表格变化事件
			bordered: 有边的
		-->
		<a-table
			:row-selection="{ selectedRowKeys: state.selectedRowKeys, onChange: onSelectChange }"
			:columns="columns"
			:data-source="data"
			:pagination="pagination"
			:loading="loading"
			@change="handleTableChange"
		>
			<!-- 自定义表格列内容
				column: 表格标题配置数据
				record: 行实际数据
				text: 基于 column.dataIndex 从 record 中提取出来的具体字段值
			-->
			<template #bodyCell="{ column, record }">
				<template v-if="column.dataIndex === 'name'">
					<a>{{ record.name }}</a>
				</template>

				<template v-else-if="column.key === 'action'">
					<span class="table-action">
						<a href="javascript:;" @click="() => edit(record.key)">编辑</a>
						<a href="javascript:;" @click="() => remove(record.key)">删除</a>
					</span>
				</template>
			</template>
		</a-table>
	</a-card>
</template>

<script setup>
	import { ref, reactive, computed, onMounted } from 'vue';

	// 表格加载状态
	const loading = ref(false);
	// 使用 reactive 创建响应式状态对象
	const state = reactive({
		selectedRowKeys: [], // 用于存储当前选中的行键值数组
		loading: false, // 表示是否正在加载数据的状态
	});

	// 定义表格列配置
	const columns = [
		{ title: '姓名', dataIndex: 'name', key: 'name' },
		{ title: '年龄', dataIndex: 'age', key: 'age' },
		{ title: '地址', dataIndex: 'address', key: 'address' },
		{ title: '操作', key: 'action' }, // 直接定义操作列，不再使用 slots
	];

	// 模拟数据源
	const data = ref([
		{ key: '1', name: 'name 1', age: 32, address: 'address 1' },
		{ key: '2', name: 'name 2', age: 42, address: 'address 2' },
		{ key: '3', name: 'name 3', age: 32, address: 'address 3' },
		{ key: '4', name: 'name 4', age: 42, address: 'address 4' },
		{ key: '5', name: 'name 5', age: 32, address: 'address 5' },
		{ key: '6', name: 'name 6', age: 42, address: 'address 6' },
	]);

	// 分页配置
	const pagination = reactive({
		total: computed(() => data.value.length),
		showSizeChanger: true, // 允许用户选择每页显示多少条记录
		defaultCurrent: 1, // 默认当前页码
		defaultPageSize: 2, // 默认每页显示的数量
		showTotal: function (total) {
			return `共 ${total} 条`;
		},
	});

	// 当表格行选择发生变化时调用此方法, selectedRowKeys是最新被选择的所有key
	const onSelectChange = (selectedRowKeys) => {
		console.log('选中的行键值发生了变化：', selectedRowKeys);
		state.selectedRowKeys = selectedRowKeys; // 更新选中的行键值
	};

	// 模拟编辑函数
	const edit = (key) => {
		console.log(`编辑记录 ${key}`);
	};

	// 模拟删除函数
	const remove = (key) => {
		console.log(`删除记录 ${key}`);
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

	// 模拟数据加载
	onMounted(() => {
		loading.value = true;
		setTimeout(() => {
			loading.value = false;
		}, 1000);
	});
</script>

<style scoped>
	.table-action a {
		margin-right: 8px;
	}
</style>
