import { useState, type KeyboardEvent } from "react"
import { CiSearch } from "react-icons/ci";

interface Props {
    setOnSearch: (text: string) => void
}

const SearchInput = ({ setOnSearch }: Props) => {

    const [searchText, setSearchText] = useState('')

    function storeSearchText(e: KeyboardEvent<HTMLInputElement>) {
        if (e.key === 'Enter')
            setOnSearch(searchText)
    }

    return (
        <div className="md:min-w-[400px] min-w-[200px] flex items-center  rounded-full h-[32px] box-border px-3   dark:bg-gray-800 bg-gray-100 outline-1 outline-gray-300 dark:outline-gray-700">
            <input value={searchText} onChange={(e) => setSearchText(e.target.value)} onKeyDown={storeSearchText} className="w-full focus:border-none focus:outline-none dark:placeholder:text-gray-600 dark:text-white" placeholder="Search Games..." />
            <CiSearch className="dark:fill-white fill-black"/>
        </div>
    )
}

export default SearchInput