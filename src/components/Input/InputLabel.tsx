interface InputLabelProps {
    id: string
    name: string
    complement?: string
}

export function InputLabel({ id, name, complement }: InputLabelProps) {
    return (
        <label
            htmlFor={id}
            className="flex flex-col max-w-full text-gray-700 dark:text-zinc-100"
        >
            <span className="font-bold text-gray-500 text-lg">{name}</span>

            <span className="text-sm text-gray-400"> {complement} </span>
        </label>
    )
}
