import type { ReactNode } from 'react'
import * as RedixDialog from '@radix-ui/react-dialog'

import { cn } from '@/utils/cn'

interface Props {
	open: boolean
	children: ReactNode
	title: string
	rightAction?: ReactNode
	onClose(): void
}

export const Modal = ({ open, children, title, onClose }: Props) => (
	<RedixDialog.Root open={open} onOpenChange={onClose}>
		<RedixDialog.Portal>
			<RedixDialog.Overlay
				className={cn(
					'fixed inset-0 bg-white/80 backdrop-blur-[2px] z-50',
					'data-[state=open]:animate-overlayShow',
				)}
			>
				<RedixDialog.Content
					className={cn(
						'fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-8 flex flex-col gap-8 !bg-white rounded-2xl shadow-[0px_11px_20px_0px_rgba(0,0,0,0.10)] outline-none w-full max-w-[400px]',
						'data-[state=open]:animate-contentShow max-md:rounded-none max-md:min-h-full max-md:min-w-full',
					)}
				>
					<header className="h-12 flex items-center justify-between text-gray-800">
						<span className="text-2xl tracking-[-2%] font-medium">{title}</span>
					</header>

					<div className="flex flex-col gap-8">{children}</div>
				</RedixDialog.Content>
			</RedixDialog.Overlay>
		</RedixDialog.Portal>
	</RedixDialog.Root>
)
