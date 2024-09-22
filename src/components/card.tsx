import { CheckedIcon, TrashIcon, UncheckedIcon } from '@/assets/icons'
import { Modal } from '@/components/modal'
import type { ITaskDTO } from '@/dtos/tasks'
import { cn } from '@/utils/cn'

interface Props {
	task: ITaskDTO
	onOpenDeleteModal(): void
	isDeleteModalOpen: boolean
	onCloseDeleteModal(): void
	handleDeleteTask(id: string): void
	handleEditStatusTask(id: string, taskStatus: string): void
}

export const Card = ({
	task,
	onOpenDeleteModal,
	isDeleteModalOpen,
	onCloseDeleteModal,
	handleDeleteTask,
	handleEditStatusTask,
}: Props) => (
	<div className="border border-dashed gap-4 rounded-lg p-4 border-[#D7DDE9] w-full flex justify-between hover:bg-hover transition-all hover:border-hover hover:cursor-pointer">
		<button
			type="button"
			className="size-6"
			onClick={() => handleEditStatusTask(task.id, task.status)}
		>
			{task.status === 'UNREALIZED' ? (
				<UncheckedIcon className="size-6" />
			) : (
				<CheckedIcon className="size-6" />
			)}
		</button>

		<p
			className={cn(
				'tracking-[-2%] text-black font-normal text-base w-full truncate',
				task.status === 'REALIZED' ? 'line-through text-black/55' : '',
			)}
		>
			{task.name}
		</p>

		<button type="button" onClick={onOpenDeleteModal}>
			<TrashIcon className="size-6" />
		</button>

		<Modal
			title="Deletar tarefa"
			open={isDeleteModalOpen}
			onClose={onCloseDeleteModal}
		>
			<p>Tem certeza que você deseja deletar essa tarefa?</p>

			<div className="flex gap-4 justify-between max-md:flex-col-reverse">
				<button
					type="button"
					className="w-full text-black bg-[#E7EEFB] rounded-lg py-4 px-6 transition-all hover:bg-[#e0e7f3] focus-visible:ring-[gray] border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1"
					onClick={onCloseDeleteModal}
				>
					Cancelar
				</button>

				<button
					type="button"
					className="w-full text-main bg-red-gradient rounded-lg py-4 px-6 transition-all hover:opacity-85 focus-visible:ring-[#F05353] border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1"
					onClick={() => handleDeleteTask(task.id)}
				>
					Deletar
				</button>
			</div>
		</Modal>
	</div>
)
