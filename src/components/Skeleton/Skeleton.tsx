import { ReactNode } from 'react'

interface SkeletonProps {
    customClass: string
    children?: ReactNode
}

export function Skeleton({ customClass, children }: SkeletonProps) {
    return (
        <div data-testid="skeleton" className={`${customClass} animate-pulse`}>
            {children}
        </div>
    )
}
