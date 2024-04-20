import { ReactNode } from 'react'

interface TicketRootProps {
    children: ReactNode
}

export function TicketRoot({ children }: TicketRootProps) {
    return (
        <div className="relative flex-1 w-80 my-5 bg-gray-50/30 rounded-xl">
            {children}
        </div>
    )
}
