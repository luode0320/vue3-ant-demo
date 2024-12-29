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
	<a-table :columns="columns" :data-source="data" bordered>
		<!-- 自定义表格列内容
            column: 表格标题配置数据
            record: 行实际数据
            text: 基于 column.dataIndex 从 record 中提取出来的具体字段值
        -->
		<template #bodyCell="{ column, text }">
			<!-- name姓名列的自定义渲染 -->
			<template v-if="column.dataIndex === 'name'">
				<a>{{ text }}</a>
			</template>
		</template>

		<!-- 表格页头 -->
		<template #title>页头</template>
		<!-- 表格页脚 -->
		<template #footer>页脚</template>
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
		{ title: 'Name', dataIndex: 'name' },
		{ title: 'Cash Assets', className: 'column-money', dataIndex: 'money' },
		{ title: 'Address', dataIndex: 'address' },
	];

	// 数据源：定义表格中的数据行
	const data = [
		{ key: '1', name: '罗德 1', money: '￥300,000.00', address: 'address 1' },
		{ key: '2', name: '罗德 2', money: '￥1,256,000.00', address: 'address 2' },
		{ key: '3', name: '罗德 3', money: '￥120,000.00', address: 'address 3' },
	];
</script>

<style scoped>
	/* 样式作用范围仅限于当前组件 */
	th.column-money,
	td.column-money {
		text-align: right !important; /* 设置现金资产列的内容右对齐 */
	}
</style>
