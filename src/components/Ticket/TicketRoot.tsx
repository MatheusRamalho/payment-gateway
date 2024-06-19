import { ReactNode } from 'react'

interface TicketRootProps {
    children: ReactNode
}

export function TicketRoot({ children }: TicketRootProps) {
    return (
        <div className="relative w-80 my-5 bg-gray-100 border border-gray-300 rounded-xl">
            {children}
        </div>
    )
}
