import React, { useEffect, useState } from 'react'
import SingleRecipe from './singleRecipe'

const Recipe = () => {
 const [recipes, setRecipes] = useState([])
 const [loading, setLoading] = useState(false)
 const [query, setQuery] = useState('chicken')
 const app_id = 'd49e77b4';
 const app_key = '6d8440650bdd23164a45976c214d97ea'
 const url = `https://api.edamam.com/search?q=${query}&app_id=${app_id}&app_key=${app_key}`


 useEffect(() => {
  const fetchData = async () => {
   const response = await fetch(url)
   const result = await response.json()
   const { hits } = result
   setRecipes([hits])
   setLoading(false)
  }
  fetchData();
 }, [loading])

 const handleSubmit = (e) => {
  e.preventDefault()
  setLoading(true)
 }
 if (loading) {
  return <h1>data isLoading ...</h1>
 }
 return <section>

  {
   recipes.length < 1 ? <div><h1>no items fount</h1></div> : (
    <div>
     <div className="form-container">
      <form className="app_searchForm" onSubmit={handleSubmit}>
       <input
        className="app_input"
        type="text"
        placeholder="enter ingridient"
        autoComplete="Off"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
       />
       <input className="app_submit" type="submit" value="Search" />
      </form>
     </div>
     <div className="results">
      {recipes.map((item, index) => {
       return <SingleRecipe {...item} item={item} key={index} />
      })}
      <div className="container">
      </div>
     </div>
    </div>
   )
  }


 </section>
}

export default Recipe;