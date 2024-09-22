import { httpClient } from '@/services/http-client'

export interface DeleteTaskResponse {
	message: string
}

type IResponse = DeleteTaskResponse

export async function removeTask(taskId: string): Promise<IResponse> {
		const { data } = await httpClient.delete<DeleteTaskResponse>(
			`/api/tasks/${taskId}`,
		)
		return {
			message: data.message,
		}
	}
