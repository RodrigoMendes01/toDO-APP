type IStatus = 'REALIZED' | 'UNREALIZED'

export interface ITaskDTO {
	id: string
	name: string
	status: string
	createdAt: string
	updatedAt: string
	deletedAt?: string | null
}
