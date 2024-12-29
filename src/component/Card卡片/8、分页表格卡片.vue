<template>
	<a-card title="带分页和多选的卡片表格" style="width: 100%">
		<!-- 使用 a-table 组件创建表格 -->
		<a-table :columns="columns" :data-source="paginatedData" :pagination="pagination" :loading="loading" :row-selection="rowSelection" @change="handleTableChange">
			<!-- 自定义表格列内容 -->
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

	// 计算属性：根据分页参数返回当前页面的数据
	const paginatedData = computed(() => {
		const start = (pagination.current - 1) * pagination.pageSize;
		const end = start + pagination.pageSize;
		return data.value.slice(start, end);
	});

	// 分页配置
	const pagination = reactive({
		current: 1,
		pageSize: 4,
		total: computed(() => data.value.length),
		showSizeChanger: true,
		showQuickJumper: true,
	});

	// 表格加载状态
	const loading = ref(false);

	// 全局多选配置
	const allSelectedRowKeys = ref([]); // 保存所有选择的行键

	// 当前页面的多选配置
	const rowSelection = computed(() => ({
		selectedRowKeys: allSelectedRowKeys.value.filter((key) => paginatedData.value.some((item) => item.key === key)),
		onChange: (selectedKeys, selectedRows) => {
			console.log(`Selected Row Keys: ${selectedKeys}`, 'Selected Rows:', selectedRows);
			allSelectedRowKeys.value = [...new Set([...allSelectedRowKeys.value, ...selectedKeys])];
		},
		onSelectAll: (selected, allRows, changeRows) => {
			console.log('Select All:', selected, 'All Rows:', allRows, 'Changed Rows:', changeRows);
			if (selected) {
				allSelectedRowKeys.value = [...new Set([...allSelectedRowKeys.value, ...allRows.map((row) => row.key)])];
			} else {
				allSelectedRowKeys.value = allSelectedRowKeys.value.filter((key) => !allRows.some((row) => row.key === key));
			}
		},
	}));

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
