interface InputLabelProps {
    id: string
    name: string
    complement?: string
}

export const InputLabel = ({ id, name, complement }: InputLabelProps) => {
    return (
        <label
            htmlFor={id}
            className="flex flex-col w-full text-gray-700 dark:text-zinc-100"
        >
            <span className="font-bold text-gray-500 text-lg leading-10">
                {name}
            </span>

            <span className="text-sm text-gray-400"> {complement} </span>
        </label>
    )
}
