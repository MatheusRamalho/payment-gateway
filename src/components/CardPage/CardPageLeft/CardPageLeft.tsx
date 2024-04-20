import { ReactNode } from 'react'

interface CardPageLeftProps {
    children: ReactNode
}

export function CardPageLeft({ children }: CardPageLeftProps) {
    return <div className="flex-1"> {children} </div>
}
