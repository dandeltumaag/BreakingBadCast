import React from 'react'
import CharacterItem from './CharacterItem'
import Spinner from '../ui/Spinner'

const CharacterGrid = ({ items, isLoading }) => {
	return (
		isLoading ? ( <Spinner /> ) : 
		( 
			<section className='cards'>
				{/* map through the items and generate item */}
				{items.map(item => (
					<CharacterItem key={item.char_id} item={item} />
				))}
			</section>  
		)
	)
}

export default CharacterGrid
