<template>
	<!-- 使用 a-table 组件创建表格
        columns: 表格列配置
        row-key: 设置行键，确保每行数据唯一
        data-source: 数据源
        pagination: 分页配置
        loading: 加载状态
        change: 处理表格变化事件
        bordered: 有边的
    -->
	<a-table :columns="columns" :data-source="data" :scroll="{ x: 1300, y: 1000 }">
		<!-- 自定义表格列内容
            column: 表格标题配置数据
            record: 行实际数据
            text: 基于 column.dataIndex 从 record 中提取出来的具体字段值
        -->
		<template #bodyCell="{ column }">
			<!-- 当列名是 'operation' 时，显示操作链接 -->
			<template v-if="column.key === 'operation'">
				<a>操作</a>
			</template>
		</template>
	</a-table>
</template>

<script setup>
	// 表格列配置：定义表格的列标题、数据索引等信息
	// title: 列标题
	// dataIndex: 对应数据项中的字段名
	// className: 自定义样式类名，用于对齐方式调整
	// width: 设置该列的宽度
	// key: 每列的唯一标识符
	// ellipsis: 当内容超出时显示省略号
	// fixed: 固定在左(left)/右(right)侧
	const columns = [
		{
			title: 'Full Name',
			width: 100,
			dataIndex: 'name',
			key: 'name',
			fixed: 'left',
		},
		{
			title: 'Age',
			width: 100,
			dataIndex: 'age',
			key: 'age',
			fixed: 'left',
		},
		{
			title: 'Column 1',
			dataIndex: 'address',
			key: '1',
		},
		{
			title: 'Column 2',
			dataIndex: 'address',
			key: '2',
		},
		{
			title: 'Column 3',
			dataIndex: 'address',
			key: '3',
		},
		{
			title: 'Column 4',
			dataIndex: 'address',
			key: '4',
		},
		{
			title: 'Column 5',
			dataIndex: 'address',
			key: '5',
		},
		{
			title: 'Column 6',
			dataIndex: 'address',
			key: '6',
		},
		{
			title: 'Column 7',
			dataIndex: 'address',
			key: '7',
		},
		{
			title: 'Column 8',
			dataIndex: 'address',
			key: '8',
		},
		{
			title: 'Action',
			key: 'operation',
			fixed: 'right',
			width: 100,
		},
	];

	// 数据源，即表格中展示的数据列表
	const data = [
		{
			key: '1',
			name: 'John Brown',
			age: 32,
			address: 'New York Park',
		},
		{
			key: '2',
			name: 'Jim Green',
			age: 40,
			address: 'London Park',
		},
	];
</script>

<style scoped></style>
