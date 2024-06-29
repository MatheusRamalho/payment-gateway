import { ReactNode } from 'react'

interface CardPageRootProps {
    children: ReactNode
    legend: string
}

export function CardPageRoot({ legend, children }: CardPageRootProps) {
    return (
        <section className="w-full h-auto max-w-6xl lg:max-h-[800px] border border-secondary-200 dark:border-primary-700 bg-white dark:bg-secondary-900 shadow-lg rounded-lg lg:overflow-hidden">
            <h6 hidden> {legend} </h6>

            <div className="flex w-full h-full flex-col lg:flex-row">
                {children}
            </div>
        </section>
    )
}
