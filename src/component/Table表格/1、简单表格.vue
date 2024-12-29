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
	<a-table :data-source="dataSource" :columns="columns" />
</template>

<script setup>
	// 导入所需的 Vue API 函数（如果需要）
	import { ref } from 'vue';

	// 数据源：定义表格中实际的数据行
	const dataSource = ref([
		{ key: '1', name: '胡彦斌', age: 32, address: '西湖区湖底公园1号' },
		{ key: '2', name: '胡彦祖', age: 42, address: '西湖区湖底公园1号' },
	]);

	// 表格列配置：定义表格的列标题、数据索引等信息
	// title: 列标题
	// dataIndex: 对应数据项中的字段名
	// className: 自定义样式类名，用于对齐方式调整
	// width: 设置该列的宽度
	// key: 每列的唯一标识符
	// ellipsis: 当内容超出时显示省略号
	// fixed: 固定在左(left)/右(right)侧
	const columns = [
		{ title: '姓名', dataIndex: 'name', key: 'name' },
		{ title: '年龄', dataIndex: 'age', key: 'age' },
		{ title: '住址', dataIndex: 'address', key: 'address' },
	];
</script>

<style scoped>
	/* 这里可以添加样式 */
</style>
