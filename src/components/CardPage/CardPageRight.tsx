import { ReactNode } from 'react'

interface CardPageRightProps {
    children: ReactNode
}

export const CardPageRight = ({ children }: CardPageRightProps) => {
    return (
        <div className="flex-1 border border-gray-200 flex items-center justify-center flex-col">
            {children}
        </div>
    )
}
