import { ReactNode } from 'react'
import dynamicIconImports from 'lucide-react/dynamicIconImports'

import { Icon } from '@/components/Icon'

interface CardPageRootProps {
    icon: keyof typeof dynamicIconImports
    title: string
    subtitle: string
    children: ReactNode
}

export function CardPageRoot({
    children,
    icon,
    title,
    subtitle,
}: CardPageRootProps) {
    return (
        <div className="max-w-screen-xl h-auto container mx-auto py-16 px-10 rounded-2xl bg-white border border-gray-50 shadow-lg">
            <div className="flex items-center gap-3">
                <div className="w-14 h-14 bg-primary-500 rounded-full flex items-center justify-center">
                    <Icon
                        name={icon}
                        strokeWidth={2}
                        customClass="text-white size-7"
                    />
                </div>

                <div className="">
                    <h3 className="font-bold text-gray-500 text-xl">{title}</h3>

                    <p className="font-regular text-gray-400 text-base">
                        {subtitle}
                    </p>
                </div>
            </div>

            <div className="flex gap-10 mt-4"> {children} </div>
        </div>
    )
}
