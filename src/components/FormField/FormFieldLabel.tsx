interface FormFieldLabelProps {
    id: string
    name: string
    complement?: string
}

export function FormFieldLabel({ id, name, complement }: FormFieldLabelProps) {
    return (
        <label
            htmlFor={id}
            className="flex flex-col min-w-48 max-w-full text-secondary-800 dark:text-secondary-200"
        >
            <span className="font-bold text-lg">{name}</span>

            <span className="text-xs text-secondary-500"> {complement} </span>
        </label>
    )
}
