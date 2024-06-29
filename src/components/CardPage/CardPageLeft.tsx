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
        <div className="flex-[2 2 0%] order-2 lg:order-1 p-6 md:p-10 md:px-14">
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
                        <h3 className="font-bold text-secondary-800 text-2xl">
                            {title}
                        </h3>

                        <p className="font-regular text-secondary-500 text-base">
                            {subtitle}
                        </p>
                    </div>
                </header>

                <div className="h-auto mt-10">{children}</div>
            </div>
        </div>
    )
}
