import DropDown from "./DropDown"

interface SearchTitle {
    name: string
    id: number
    value: string
}


const SearchSelector = ({setSearchTag}: {setSearchTag: (tag: string) => void}) => {

    const items: SearchTitle[] = [
        { name: 'name', id: 1, value: 'name' },
        { name: 'Release Date', id: 2, value: 'released' },
        { name: 'rating', id: 3, value: '-rating' },
        { name: 'added', id: 4, value: 'added' }
    ]

    function mapValueAndSelectSearchTag(name: string) {
        setSearchTag(name)
    }

    return (
        <>
            <DropDown<SearchTitle> items={items} error="" setSelectedFunc={(item: SearchTitle) => {mapValueAndSelectSearchTag(item.value)}} title="Search Selector" />
        </>
    )
}

export default SearchSelector