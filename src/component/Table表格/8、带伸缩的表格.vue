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
		-->
	<a-table :columns="columns" :data-source="data" @resizeColumn="handleResizeColumn">
		<!-- 自定义表头单元格内容渲染 -->
		<template #headerCell="{ column }">
			<template v-if="column.key === 'name'">
				<!-- 插入一个笑脸图标 -->
				<span>
					<SmileOutlined />
					姓名
				</span>
			</template>
		</template>

		<!-- 自定义表格列内容
            column: 表格标题配置数据
            record: 行实际数据
            text: 基于 column.dataIndex 从 record 中提取出来的具体字段值
        -->
		<template #bodyCell="{ column, record }">
			<template v-if="column.key === 'name'">
				<a>
					{{ record.name }}
				</a>
			</template>

			<template v-else-if="column.key === 'tags'">
				<span>
					<!-- 根据标签内容设置不同颜色 -->
					<a-tag v-for="tag in record.tags" :key="tag" :color="tag === 'loser' ? 'volcano' : tag.length > 5 ? 'geekblue' : 'green'">
						{{ tag.toUpperCase() }}
					</a-tag>
				</span>
			</template>

			<template v-else-if="column.key === 'action'">
				<span>
					<!-- 操作链接：邀请、删除、更多操作 -->
					<a>邀请 {{ record.name }}</a>
					<a-divider type="vertical" />
					<a @click="onDelete(record)">删除</a>
					<a-divider type="vertical" />
					<a class="ant-dropdown-link">
						更多操作
						<DownOutlined />
					</a>
				</span>
			</template>
		</template>
	</a-table>
</template>

<script setup>
	import { ref } from 'vue';
	// 引入 Ant Design Vue 组件（假设这些已经在项目中安装）
	import { SmileOutlined, DownOutlined } from '@ant-design/icons-vue';

	// 数据源，即表格中展示的数据列表
	const data = [
		{
			key: '1',
			name: 'John Brown',
			age: 32,
			address: '纽约 No. 1 湖泊公园',
			tags: ['nice', 'developer'],
		},
		{
			key: '2',
			name: 'Jim Green',
			age: 42,
			address: '伦敦 No. 1 湖泊公园',
			tags: ['loser'],
		},
		{
			key: '3',
			name: 'Joe Black',
			age: 32,
			address: '悉尼 No. 1 湖泊公园',
			tags: ['cool', 'teacher'],
		},
	];

	// 表格列配置：定义表格的列标题、数据索引等信息
	// title: 列标题
	// dataIndex: 对应数据项中的字段名
	// className: 自定义样式类名，用于对齐方式调整
	// width: 设置该列的宽度
	// key: 每列的唯一标识符
	// ellipsis: 当内容超出时显示省略号
	// fixed: 固定在左(left)/右(right)侧
	// sorter: 排序器配置(只能对当前加载的数据排序, 分页排序接口本身控制)
	// resizable: 允许调整列宽
	// minWidth: 最小宽度
	// maxWidth: 最大宽度
	const columns = ref([
		{
			dataIndex: 'name',
			key: 'name',
			resizable: true, // 允许调整列宽
			width: 150, // 初始宽度
		},
		{
			title: '年龄',
			dataIndex: 'age',
			key: 'age',
			resizable: true,
			width: 100,
			minWidth: 100, // 最小宽度
			maxWidth: 200, // 最大宽度
		},
		{
			title: '地址',
			dataIndex: 'address',
			key: 'address',
		},
		{
			title: '标签',
			key: 'tags',
			dataIndex: 'tags',
		},
		{
			title: '操作',
			key: 'action',
		},
	]);

	// 当用户调整列宽时触发此方法
	function handleResizeColumn(w, col) {
		console.log('调整后的宽度:', w);
		col.width = w; // 更新列宽
	}

	// 删除功能示例（假设需要实现）
	function onDelete(record) {
		console.log('删除记录:', record);
		// 实现删除逻辑...
	}
</script>

<!-- 可选：如果你需要在 <style> 标签中添加样式，可以在这里添加 -->
<style scoped></style>
