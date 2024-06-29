import { ReactNode } from 'react'

interface SectionProps {
    legend: string
    children?: ReactNode
    customClass?: string
}

export function Section({ legend, children, customClass }: SectionProps) {
    return (
        <section
            className={`w-full h-full bg-secondary-100/30 py-20 px-5 ${customClass}`}
        >
            <h6 hidden> {legend} </h6>

            <div className="container mx-auto">{children}</div>
        </section>
    )
}
