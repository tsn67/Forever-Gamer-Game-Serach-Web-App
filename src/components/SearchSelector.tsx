import DropDown from "./DropDown"

interface SearchTitle {
    name: string
    id: number
}

const SearchSelector = () => {


    const items: SearchTitle[] = [{name: 'Relevance', id: 1}, {name: 'Released Date', id: 2}]

    return (
        <>
            <DropDown<SearchTitle> items={items} error="" setSelectedFunc={() => {}} title="Search Selector"/>
        </>
    )
}

export default SearchSelector