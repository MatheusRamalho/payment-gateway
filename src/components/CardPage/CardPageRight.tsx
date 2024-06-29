import { ReactNode } from 'react'
import { Icon } from '../Icon'

interface CardPageRightProps {
    children: ReactNode
}

export function CardPageRight({ children }: CardPageRightProps) {
    return (
        <aside className="relative order-1 lg:order-2 flex-1 flex items-center justify-end flex-col p-6 md:p-4 md:px-14">
            <button className="absolute top-0 right-0 size-12 bg-secondary-200/50 dark:bg-primary-700 rounded-tr-lg flex items-center justify-center">
                <Icon name="x" customClass="dark:text-secondary-200" />
            </button>

            {children}
        </aside>
    )
}
