import { ReactNode } from 'react'

interface CardPageRightProps {
    children: ReactNode
}

export function CardPageRight({ children }: CardPageRightProps) {
    return (
        <div className="px-10 flex items-center justify-center flex-col">
            {children}
        </div>
    )
}
