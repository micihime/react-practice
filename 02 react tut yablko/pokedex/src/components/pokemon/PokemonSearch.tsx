import React, {useRef} from 'react'

interface Props {
    onSearch: (query: string) => void
}

const PokemonSearch: React.FC<Props> = props => {
    const searchInput = useRef<HTMLInputElement>(null) 

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault() 
        let searchString = searchInput.current?.value
        if (searchString)
            props.onSearch(searchString);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                autoFocus
                type="text" 
                ref={searchInput}
            />
        </form>
    )
}

export default PokemonSearch;