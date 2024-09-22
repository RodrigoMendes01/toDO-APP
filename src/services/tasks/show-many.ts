import { httpClient } from '@/services/http-client'
import type { TaskResponse } from '@/services/tasks/create'

export interface TaskListResponse {
	tasks: TaskResponse[]
}

type IResponse = TaskListResponse

export async function showManyTasks(): Promise<IResponse> {
	const { data } = await httpClient.get<TaskListResponse>('/api/tasks')

	return {
		tasks: data.tasks.map((task) => ({
			id: task.id,
			name: task.name,
			status: task.status,
			createdAt: task.createdAt,
			updatedAt: task.updatedAt,
			deletedAt: task.deletedAt,
		})),
	}
}
