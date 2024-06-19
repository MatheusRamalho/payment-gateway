import { ReactNode } from 'react'

interface InputContentProps {
    children: ReactNode
    customClass?: string
}

export function InputContent({ children, customClass }: InputContentProps) {
    return (
        <div
            className={`w-full flex items-center justify-center flex-col gap-2 ${customClass}`}
        >
            {children}
        </div>
    )
}
