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
		<!-- 自定义表头单元格内容, column是表格标题配置数据 -->
		<template #headerCell="{ column }">
			<template v-if="column.key === 'name'">
				<!-- 添加一个笑脸图标 -->
				<span>
					<SmileOutlined />
					Name
				</span>
			</template>
		</template>

		<!-- 自定义表格列内容
            column: 表格标题配置数据
            record: 行实际数据
            text: 基于 column.dataIndex 从 record 中提取出来的具体字段值
        -->
		<template #bodyCell="{ column, record }">
			<!-- name姓名列的自定义渲染 -->
			<template v-if="column.key === 'name'">
				<a>
					{{ record.name }}
				</a>
			</template>

			<!-- tags标签列的自定义渲染 -->
			<template v-else-if="column.key === 'tags'">
				<span>
					<!-- 遍历record.tags标签数组,动态设置标签color颜色,将标签文本转换为toUpperCase大写 -->
					<a-tag v-for="tag in record.tags" :key="tag" :color="getTagColor(tag)">
						{{ tag.toUpperCase() }}
					</a-tag>
				</span>
			</template>

			<!-- 操作列的自定义渲染 -->
			<template v-else-if="column.key === 'action'">
				<span>
					<!-- 邀请操作 -->
					<a>邀请 一 {{ record.name }}</a>
					<!-- 竖直分隔符 -->
					<a-divider type="vertical" />
					<!-- 删除操作 -->
					<a @click="deleteRecord(record.key)">删除</a>
					<!-- 竖直分隔符 -->
					<a-divider type="vertical" />
					<!-- 更多操作 -->
					<a class="ant-dropdown-link" @click="showMoreActions">
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
	import { SmileOutlined, DownOutlined } from '@ant-design/icons-vue'; // 导入 Ant Design 图标组件

	// 表格列配置：定义表格的列标题、数据索引等信息
	// title: 列标题
	// dataIndex: 对应数据项中的字段名
	// className: 自定义样式类名，用于对齐方式调整
	// width: 设置该列的宽度
	// key: 每列的唯一标识符
	// ellipsis: 当内容超出时显示省略号
	// fixed: 固定在左(left)/右(right)侧
	const columns = [
		{ name: 'Name', dataIndex: 'name', key: 'name' },
		{ title: 'Age', dataIndex: 'age', key: 'age' },
		{ title: 'Address', dataIndex: 'address', key: 'address' },
		{ title: 'Tags', key: 'tags', dataIndex: 'tags' },
		{ title: 'Action', key: 'action' },
	];

	// 数据源：定义表格中的数据行
	const data = [
		{ key: '1', name: '罗德1', age: 32, address: 'New York No. 1 Lake Park', tags: ['成功者', '开发者'] },
		{ key: '2', name: '罗德2', age: 42, address: 'London No. 1 Lake Park', tags: ['失败者'] },
		{ key: '3', name: '罗德3', age: 32, address: 'Sidney No. 1 Lake Park', tags: ['厨师', '老师'] },
	];

	// 获取标签颜色的方法
	const getTagColor = (tag) => {
		if (tag === 'loser') return 'volcano';
		if (tag.length > 5) return 'geekblue';
		return 'green';
	};

	// 删除记录的方法（模拟）
	const deleteRecord = (key) => {
		console.log(`删除记录 ${key}`);
		// 实际应用中可以在这里实现删除逻辑
	};

	// 显示更多操作的方法（模拟）
	const showMoreActions = () => {
		console.log('显示更多操作');
		// 实际应用中可以在这里实现显示更多操作的逻辑
	};
</script>

<style scoped>
	/* 这里可以添加样式 */
	.ant-dropdown-link {
		cursor: pointer;
	}
</style>
