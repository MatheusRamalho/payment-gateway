import { ReactNode } from 'react'

interface InputRootProps {
    children: ReactNode
    isCol?: boolean
}

export const InputRoot = ({ children, isCol = false }: InputRootProps) => {
    return (
        <div
            className={`flex items-start justify-center gap-3 flex-col sm:flex-row my-10 ${
                isCol && '!flex-col'
            }`}
        >
            {children}
        </div>
    )
}
