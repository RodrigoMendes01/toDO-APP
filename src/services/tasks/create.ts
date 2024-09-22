import { httpClient } from '@/services/http-client'

export interface Params {
	name: string
	status?: 'REALIZED' | 'UNREALIZED'
}

export interface TaskResponse {
	id: string
	name: string
	status: string
	createdAt: string
	updatedAt: string
	deletedAt?: string | null
}

type IResponse = TaskResponse

export async function createTask(params: Params): Promise<IResponse> {
		const { data } = await httpClient.post<TaskResponse>('/api/tasks', params)
		
		return {
      id: data.id,
      name: data.name,
      status: data.status,
      createdAt: data.createdAt,
      updatedAt: data.updatedAt,
      deletedAt: data.deletedAt,
    }
	}
