import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css';
import Header from './components/ui/Header'
import CharacterGrid from './components/characters/CharacterGrid'
import Search from './components/ui/Search'

function App() {
	const [items, setItems] = useState([])
	const [isLoading, setIsLoading] = useState(true)
	const [query, setQuery] = useState('')

	useEffect(() => {
		const fetchItems = async () => {
			/* this will get all the characters */
			const result = await axios(`https://www.breakingbadapi.com/api/characters?name=${query}`)
			
			// console.log(result.data)
			/* pass result data to the items array */
			setItems(result.data)
			/* set value of the isLoading to false */
			setIsLoading(false)
		}

		fetchItems()
	}, [query])

  return (
    <div className="container">
			<Header />
			<Search getQuery={ (q) => setQuery(q) } />
			<CharacterGrid items={items} isLoading={isLoading} />
    </div>
  );
}

export default App;
