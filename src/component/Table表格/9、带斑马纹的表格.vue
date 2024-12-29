<template>
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
        resizeColumn: 监听列调整事件
        size: 表格大小(large | middle | small)
		-->
	<a-table class="ant-table-striped" size="large" :columns="columns" :data-source="data" :row-class-name="(_record, index) => (index % 2 === 1 ? 'table-striped' : null)" bordered />
</template>

<script setup>
	// 定义表格的列信息
	const columns = [
		{
			title: '姓名',
			dataIndex: 'name', // 数据字段名，用于从数据源中获取显示值
		},
		{
			title: '年龄',
			dataIndex: 'age',
		},
		{
			title: '地址',
			dataIndex: 'address',
		},
	];

	// 数据源，即表格中展示的数据列表
	const data = [
		{
			key: '1',
			name: 'John Brown',
			age: 32,
			address: '纽约 No. 1 湖泊公园',
		},
		{
			key: '2',
			name: 'Jim Green',
			age: 42,
			address: '伦敦 No. 1 湖泊公园',
		},
		{
			key: '3',
			name: 'Joe Black',
			age: 32,
			address: '悉尼 No. 1 湖泊公园',
		},
		{
			key: '4',
			name: 'Ben Kang',
			age: 15,
			address: '悉尼 No. 1 湖泊公园',
		},
	];
</script>

<style scoped>
	/* 默认主题下的条纹背景 */
	.ant-table-striped :deep(.table-striped) td {
		background-color: #dee2e286; /* 浅色背景 */
	}
</style>
