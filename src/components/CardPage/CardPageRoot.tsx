import { ReactNode } from 'react'

interface CardPageRootProps {
    children: ReactNode
    legend: string
}

export function CardPageRoot({ legend, children }: CardPageRootProps) {
    return (
        <section className="w-full h-screen bg-white overflow-hidden">
            <h6 hidden> {legend} </h6>

            <div className="flex w-full h-full">{children}</div>
        </section>
    )
}
