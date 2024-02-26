import { ReactNode } from 'react'
import dynamicIconImports from 'lucide-react/dynamicIconImports'

import { Icon } from '../Icon'

interface CardPageRootProps {
    icon: keyof typeof dynamicIconImports
    title: string
    children: ReactNode
}

export const CardPageRoot = ({ children, icon, title }: CardPageRootProps) => {
    return (
        <div className="container mx-auto py-10 px-8 rounded-lg bg-white border border-gray-50 shadow-lg">
            <div className="flex items-center gap-3">
                <div className="w-14 h-14 bg-primary-500 rounded-full flex items-center justify-center">
                    <Icon name={icon} customClass="text-white size-6" />
                </div>

                <h3 className="font-bold text-gray-500 text-xl"> {title} </h3>
            </div>

            <div className="flex gap-10"> {children} </div>
        </div>
    )
}
