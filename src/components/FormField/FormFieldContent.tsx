import { ReactNode } from 'react'

interface FormFieldContentProps {
    children: ReactNode
    customClass?: string
}

export function FormFieldContent({
    children,
    customClass,
}: FormFieldContentProps) {
    return (
        <div
            className={`w-full flex items-center justify-center flex-col gap-2 ${customClass}`}
        >
            {children}
        </div>
    )
}
