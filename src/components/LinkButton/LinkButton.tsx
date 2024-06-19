import Link from 'next/link'
import { AnchorHTMLAttributes, ReactNode } from 'react'

type ButtonVariant = 'primary' | 'secondary'

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
    link: string
    variant?: ButtonVariant
    children?: ReactNode
    customClass?: string
}

const primaryClass =
    'text-white border-primary-500 bg-primary-500 hover:bg-primary-700 hover:bg-primary-700'
const secondaryClass =
    'text-gray-400 border-gray-200 bg-gray-100 hover:bg-gray-300 hover:text-gray-200'

export function LinkButton({
    link,
    children,
    variant = 'primary',
    customClass,
    ...props
}: ButtonProps) {
    return (
        <Link
            className={`cursor-pointer flex items-center justify-center gap-2 w-fit py-5 px-12 rounded-md border font-bold no-underline uppercase transition-colors duration-700 ease-in-out shadow-[0_1px_2px_rgba(16,24,40,.05)] disabled:cursor-not-allowed disabled:opacity-70
                ${variant === 'primary' && primaryClass}
                ${variant === 'secondary' && secondaryClass}
                ${customClass}
            `}
            href={link}
            {...props}
        >
            {children}
        </Link>
    )
}
