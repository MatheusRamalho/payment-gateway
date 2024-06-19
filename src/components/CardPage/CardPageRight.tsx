import { ReactNode } from 'react'

interface CardPageRightProps {
    children: ReactNode
}

export function CardPageRight({ children }: CardPageRightProps) {
    return (
        <aside className="flex-1 flex items-center justify-center flex-col p-16 border-l border-l-gray-200 bg-gray-50">
            {children}
        </aside>
    )
}
