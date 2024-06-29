import { ReactNode } from 'react'

interface FormFieldRootProps {
    children: ReactNode
    isCol?: boolean
}

export function FormFieldRoot({ children, isCol = false }: FormFieldRootProps) {
    return (
        <div
            className={`w-full flex items-start justify-center gap-3 flex-col md:flex-row ${
                isCol && '!flex-col'
            }`}
        >
            {children}
        </div>
    )
}
