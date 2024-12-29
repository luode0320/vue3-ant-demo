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
	<a-table :columns="columns" :data-source="data" @change="onChange" />
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
	// sorter: 排序器配置(只能对当前加载的数据排序, 分页排序接口本身控制)
	const columns = [
		{
			title: 'Name',
			dataIndex: 'name',
		},
		{
			title: 'Chinese Score',
			dataIndex: 'chinese',
			sorter: {
				// 排序器配置
				compare: (a, b) => a.chinese - b.chinese, // 比较函数，用于确定两个项目的相对顺序
				multiple: 3, // 排序优先级（数字越大，优先级越高）
			},
		},
		{
			title: 'Math Score',
			dataIndex: 'math',
			sorter: {
				// 排序器配置
				compare: (a, b) => a.chinese - b.chinese, // 比较函数，用于确定两个项目的相对顺序
				multiple: 2, // 排序优先级（数字越大，优先级越高）
			},
		},
		{
			title: 'English Score',
			dataIndex: 'english',
			sorter: {
				// 排序器配置
				compare: (a, b) => a.chinese - b.chinese, // 比较函数，用于确定两个项目的相对顺序
				multiple: 1, // 排序优先级（数字越大，优先级越高）
			},
		},
	];
	const data = [
		{
			key: '1',
			name: 'John Brown',
			chinese: 90,
			math: 60,
			english: 70,
		},
		{
			key: '2',
			name: 'Jim Green',
			chinese: 80,
			math: 66,
			english: 89,
		},
		{
			key: '3',
			name: 'Joe Black',
			chinese: 100,
			math: 90,
			english: 70,
		},
		{
			key: '4',
			name: 'Jim Red',
			chinese: 70,
			math: 100,
			english: 80,
		},
	];

	// 当表格状态发生变化时触发此方法，例如分页、筛选或排序变化
	// 参数说明：
	// pagination：分页信息对象，包含当前页码、总页数等信息。
	// filters：过滤条件对象，表示用户选择的过滤条件。
	// sorter：排序信息对象，包含排序字段及排序方向。
	// extra：额外信息对象，通常包含 action 属性，指示是哪种操作触发了变更。
	function onChange(pagination, filters, sorter, extra) {
		console.log('params:', pagination, filters, sorter, extra);
	}
</script>

<style scoped></style>
