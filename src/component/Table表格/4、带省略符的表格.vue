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
	<a-table :columns="columns" :data-source="data">
		<!-- 自定义表格列内容
            column: 表格标题配置数据
            record: 行实际数据
            text: 基于 column.dataIndex 从 record 中提取出来的具体字段值
        -->
		<template #bodyCell="{ column, text }">
			<!-- 姓名列的自定义渲染 -->
			<template v-if="column.dataIndex === 'name'">
				<a>{{ text }}</a>
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
			title: 'Name',
			dataIndex: 'name',
			key: 'name',
		},
		{
			title: 'Age',
			dataIndex: 'age',
			key: 'age',
			width: 80,
		},
		{
			title: 'Address',
			dataIndex: 'address',
			key: 'address 1',
			ellipsis: true,
		},
		{
			title: 'Long Column Long Column Long Column',
			dataIndex: 'address',
			key: 'address 2',
			ellipsis: true,
		},
		{
			title: 'Long Column Long Column',
			dataIndex: 'address',
			key: 'address 3',
			ellipsis: true,
		},
		{
			title: 'Long Column',
			dataIndex: 'address',
			key: 'address 4',
			ellipsis: true,
		},
	];

	// 数据源：定义表格中的数据行
	const data = [
		{
			key: '1',
			name: 'John Brown',
			age: 32,
			address: 'New York No. 1 Lake Park, New York No. 1 Lake Park',
			tags: ['nice', 'developer'],
		},
		{
			key: '2',
			name: 'Jim Green',
			age: 42,
			address: 'London No. 2 Lake Park, London No. 2 Lake Park',
			tags: ['loser'],
		},
		{
			key: '3',
			name: 'Joe Black',
			age: 32,
			address: 'Sidney No. 1 Lake Park, Sidney No. 1 Lake Park',
			tags: ['cool', 'teacher'],
		},
	];
</script>

<style scoped></style>
