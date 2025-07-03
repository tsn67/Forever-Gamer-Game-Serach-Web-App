
const ScoreBadge = ({score}: {score: number}) => {

    const colorScheme = score > 80 ? ['text-green-300', 'bg-green-800'] : score > 50 ? ['text-yellow-300', 'bg-yellow-800'] : ['text-red-300', 'bg-red-800']

    return (
        <div className={`${colorScheme[0]+" "+colorScheme[1]} dark:opacity-45 opacity-75 text-sm rounded-sm py-0 px-2 mt-1 mb-2 mr-2`}>{score ? score : 0}</div>
    )
}

export default ScoreBadge