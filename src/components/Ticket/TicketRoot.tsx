import { ReactNode } from 'react'

interface TicketRootProps {
    children: ReactNode
}

export const TicketRoot = ({ children }: TicketRootProps) => {
    return (
        <div className="w-72 sm:w-96 my-5 bg-gray-50 rounded-xl shadow">
            {children}
        </div>
    )
}
