<template>
	<div>
		<!-- 第一组：紧凑排列的按钮组，带有工具提示和图标的按钮 -->
		<a-space-compact block>
			<!-- 使用 a-tooltip 组件为每个按钮提供工具提示 -->
			<a-tooltip title="点赞">
				<a-button>
					<LikeOutlined />
				</a-button>
			</a-tooltip>

			<a-tooltip title="评论">
				<a-button>
					<CommentOutlined />
				</a-button>
			</a-tooltip>

			<a-tooltip title="收藏">
				<a-button>
					<StarOutlined />
				</a-button>
			</a-tooltip>

			<a-tooltip title="喜欢">
				<a-button>
					<HeartOutlined />
				</a-button>
			</a-tooltip>

			<a-tooltip title="分享">
				<a-button>
					<ShareAltOutlined />
				</a-button>
			</a-tooltip>

			<a-tooltip title="下载">
				<a-button>
					<DownloadOutlined />
				</a-button>
			</a-tooltip>

			<!-- 下拉菜单按钮，click点击触发下拉菜单 -->
			<a-dropdown placement="bottomRight" :trigger="['click']">
				<a-button>
					<EllipsisOutlined />
				</a-button>

				<!-- 下拉菜单的内容 -->
				<template #overlay>
					<a-menu>
						<a-menu-item>
							<a href="javascript:;">第一个菜单项</a>
						</a-menu-item>
						<a-menu-item>
							<a href="javascript:;">第二个菜单项</a>
						</a-menu-item>
						<a-menu-item>
							<a href="javascript:;">第三个菜单项</a>
						</a-menu-item>
					</a-menu>
				</template>
			</a-dropdown>
		</a-space-compact>
		<br />

		<!-- 第二组：紧凑排列的主要按钮组，带有禁用状态的按钮 -->
		<a-space-compact block>
			<a-button type="primary">按钮1</a-button>
			<a-button type="primary">按钮2</a-button>
			<a-button type="primary">按钮3</a-button>
			<a-button type="primary">按钮4</a-button>

			<!-- 带有工具提示的禁用按钮 -->
			<a-tooltip title="工具提示">
				<a-button type="primary" disabled>
					<DownloadOutlined />
				</a-button>
			</a-tooltip>
			<a-tooltip title="工具提示">
				<a-button type="primary" disabled>
					<DownloadOutlined />
				</a-button>
			</a-tooltip>
		</a-space-compact>
		<br />

		<!-- 第三组：紧凑排列的普通按钮组，带有工具提示和主要按钮 -->
		<a-space-compact block>
			<a-button>按钮1</a-button>
			<a-button>按钮2</a-button>
			<a-button>按钮3</a-button>

			<a-tooltip title="工具提示(禁用)">
				<a-button disabled>
					<DownloadOutlined />
				</a-button>
			</a-tooltip>
			<a-tooltip title="工具提示">
				<a-button>
					<DownloadOutlined />
				</a-button>
			</a-tooltip>

			<!-- 主要按钮 -->
			<a-button type="primary">按钮4</a-button>

			<!-- 带有下拉菜单的主要按钮，click点击触发下拉菜单 -->
			<a-dropdown placement="bottomRight" :trigger="['click']">
				<a-button type="primary">
					<EllipsisOutlined />
				</a-button>

				<!-- 下拉菜单的内容 -->
				<template #overlay>
					<a-menu>
						<a-menu-item>
							<a href="javascript:;">第一个菜单项</a>
						</a-menu-item>
						<a-menu-item>
							<a href="javascript:;">第二个菜单项</a>
						</a-menu-item>
						<a-menu-item>
							<a href="javascript:;">第三个菜单项</a>
						</a-menu-item>
					</a-menu>
				</template>
			</a-dropdown>
		</a-space-compact>
	</div>
</template>

<script setup>
	import { ref } from 'vue';
	import { LikeOutlined, CommentOutlined, StarOutlined, HeartOutlined, ShareAltOutlined, DownloadOutlined, EllipsisOutlined } from '@ant-design/icons-vue';
</script>

<!-- 可选：如果你需要在 <style> 标签中添加样式，可以在这里添加 -->
<style scoped></style>
