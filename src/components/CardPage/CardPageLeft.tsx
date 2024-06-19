import { ReactNode } from 'react'
import dynamicIconImports from 'lucide-react/dynamicIconImports'

import { Icon } from '@/components/Icon'

interface CardPageLeftProps {
    icon: keyof typeof dynamicIconImports
    title: string
    subtitle: string
    children: ReactNode
}

export function CardPageLeft({
    icon,
    subtitle,
    title,
    children,
}: CardPageLeftProps) {
    return (
        <div className="flex-1 p-16 bg-white overflow-auto">
            <div className="container max-w-4xl h-full ml-auto">
                <header className="w-full h-auto flex items-center gap-3">
                    <div className="w-14 h-14 bg-primary-500 rounded-full flex items-center justify-center">
                        <Icon
                            name={icon}
                            strokeWidth={2}
                            customClass="text-white size-7"
                        />
                    </div>

                    <div className="">
                        <h3 className="font-bold text-gray-500 text-2xl">
                            {title}
                        </h3>

                        <p className="font-regular text-gray-400 text-base">
                            {subtitle}
                        </p>
                    </div>
                </header>

                <div className="h-auto py-10">{children}</div>
            </div>
        </div>
    )
}
