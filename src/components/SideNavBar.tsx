import useFetchCategoreies from "../hooks/useFetchCategories"

const SideNavBar = () => {

    const { data } = useFetchCategoreies()

    return (
        <div className="flex flex-col gap-2">
            {data.map((item) => {
                return <h1>{item.name}</h1>
            })}
        </div>
    )
}

export default SideNavBar