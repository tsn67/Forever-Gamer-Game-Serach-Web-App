import useFetchCategoreies, { type Category } from "../hooks/useFetchCategories"
import getCropedImageUrl from "../utils/img-url"
import { LoadingSkeltonSideBar } from "./LoadingSkeltons"

interface Props {
    selectCategory: (category: Category) => void,
    selectedCategory: Category | null
}

const SideNavBar = ({selectCategory, selectedCategory}: Props) => {

    const { data, loading } = useFetchCategoreies()

    if (loading) {
        return <div className="flex flex-col gap-2 w-full px-1 py-0 max-h-screen overflow-y-auto scrollbar-hidden ">
            <LoadingSkeltonSideBar count={23}/>
        </div>
    }

    const selectedCategoryStyle = 'dark:bg-slate-950 dark:hover:bg-slate-950 bg-gray-200'

    return (
        <div className="flex flex-col gap-2 w-full px-1 py-2 max-h-screen overflow-y-auto scrollbar-hidden ">
            {data.map((item) => {
                return <div onClick={() => selectCategory(item)} key={item.id} className={`w-full flex flex-row  gap-4 items-center hover:text-black hover:bg-gray-200 dark:hover:bg-gray-800 px-4 py-1 rounded-sm box-border dark:text-gray-400 text-gray-800 dark:hover:text-white select-none ${selectedCategory && selectedCategory.id == item.id ? selectedCategoryStyle: '' }`}>
                    <img src={getCropedImageUrl(item.image_background)} className="w-[30px] h-[30px] rounded-full object-fill" alt="category_img" />
                    <h1 className="">{item.name}</h1>
                </div>
            })}
        </div>
    )
}

export default SideNavBar