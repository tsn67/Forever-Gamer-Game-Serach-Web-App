import { FaXbox } from "react-icons/fa";
import { FaPlaystation } from "react-icons/fa";
import { FaWindows } from "react-icons/fa";

interface Platform {
    id: number
    name: string
    slug: string
}

const PlatformIconBox = ({ platforms }: { platforms: Platform[] }) => {

    const icons = new Map([
        ['pc', <FaWindows color="gray"/>],
        ['xbox', <FaXbox color="gray"/>],
        ['playstation', <FaPlaystation color="gray"/>]
    ])

    console.log(platforms)

    return (
        <div className="flex flex-row gap-2 mt-1 mb-2 px-2">
            {platforms.map((item) => {
                if (icons.has(item.slug)) {
                    return <div key={item.id}>
                        {icons.get(item.slug)}
                    </div>
                }

            })}
        </div>
    )
}

export default PlatformIconBox