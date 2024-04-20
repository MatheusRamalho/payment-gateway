interface TicketItemProps {
    item: string
    value: string
}

export function TicketItem({ item, value }: TicketItemProps) {
    return (
        <div className="flex items-center justify-between my-1">
            <p className="flex-1 font-regular text-gray-400 text-left text-sm">
                {item}
            </p>

            <p className="flex-1 font-bold text-gray-500 text-right text-sm">
                {value}
            </p>
        </div>
    )
}
