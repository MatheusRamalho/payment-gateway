import { ReactNode } from 'react'

interface InputRootProps {
    children: ReactNode
    isCol?: boolean
}

export function InputRoot({ children, isCol = false }: InputRootProps) {
    return (
        <div
            className={`w-full flex items-start justify-center gap-3 flex-col sm:flex-row my-5 ${
                isCol && '!flex-col'
            }`}
        >
            {children}
        </div>
    )
}