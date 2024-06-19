import { ReactNode } from 'react'

interface TicketContentProps {
    children: ReactNode
}

export function TicketContent({ children }: TicketContentProps) {
    return <div className="p-8 pt-10">{children}</div>
}
