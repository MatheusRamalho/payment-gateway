export function BankSlip() {
    return (
        <div className="z-20 relative w-60 h-full p-4 rounded-2xl backdrop-blur-lg bg-white/30">
            <div className=" size-full border border-gray-400 rounded-2xl">
                <div className="w-full h-6 pr-2 text-gray-400 text-[7px] flex items-center justify-end text-right">
                    xxxxx.xxxxx xxxxx.xxxxxx xxxxx.xxxxxx x xxxxxxxxxxxxxx
                </div>

                <div className="w-full h-auto">
                    <div className="w-full h-full flex border-t border-gray-400">
                        <div className="flex-[2] h-full">
                            <div className="w-full h-5 border-b border-gray-400 flex items-center justify-start text-gray-300 text-[7px] px-2">
                                xxxxxxxxxxxxxx
                            </div>

                            <div className="w-full h-5 border-b border-gray-400"></div>

                            <div className="w-full h-5 border-b border-gray-400 flex">
                                {Array.from({ length: 5 }, (_, index) => (
                                    <div
                                        key={index}
                                        className="w-8 h-full border-r border-gray-400 flex items-center justify-start text-gray-300 text-[7px] px-2 last:border-r-0"
                                    >
                                        xxx
                                    </div>
                                ))}
                            </div>

                            {Array.from({ length: 7 }, (_, index) => (
                                <div
                                    key={index}
                                    className="w-full h-5 border-b border-gray-400"
                                />
                            ))}
                        </div>

                        <div className="flex-1 h-full border-l border-gray-400">
                            {Array.from({ length: 10 }, (_, index) => (
                                <div
                                    key={index}
                                    className="w-full h-5 border-b border-gray-400 flex items-center justify-start text-gray-300 text-[7px] px-2"
                                >
                                    xxxxxx
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="w-full h-6 border-b border-gray-400 flex items-center justify-start text-gray-300 text-[7px] px-2">
                        xxxxxxxxxxxxx
                    </div>
                </div>

                <div className="w-full h-8 flex items-center justify-center">
                    <div className="w-2/3 h-6 rounded-sm bg-gray-300" />
                </div>
            </div>
        </div>
    )
}
