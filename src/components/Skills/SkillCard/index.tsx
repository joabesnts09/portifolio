import Image from 'next/image'

interface IItemProps {
    item: {
        name: string
        img: any
        id: number
    }
}

export const SkillCard = ({ item }: IItemProps) => {
    return (
        <div className="bg-[#1C2541]/50 backdrop-blur-sm rounded-xl p-4 border border-gray-700 hover:border-purple-500 transition-all duration-300">
            <div className="flex flex-col items-center gap-3">
                <Image
                    className="w-16 h-16 object-contain"
                    width={78}
                    src={item.img}
                    alt={item.name}
                />
                <div>
                    <span className="text-white text-sm font-medium">{item.name}</span>
                </div>
            </div>
        </div>
    )
}
