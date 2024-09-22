import { httpClient } from '@/services/http-client'
import type { TaskResponse } from '@/services/tasks/create'

export interface Params {
	status: 'REALIZED' | 'UNREALIZED'
}

type IResponse = TaskResponse

export async function editTask(
	taskId: string,
	params: Params,
): Promise<IResponse> {
	const { data } = await httpClient.put<TaskResponse>(`/api/tasks/${taskId}`, {
		status: params.status,
	})

	return {
		id: data.id,
		name: data.name,
		status: data.status,
		createdAt: data.createdAt,
		updatedAt: data.updatedAt,
		deletedAt: data.deletedAt,
	}
}
