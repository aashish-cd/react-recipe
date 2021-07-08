import React from 'react'
import { useGlobal } from './context';


const SingleRecipe = ({ item }) => {
 const { showDetail, changeDetailStatus } = useGlobal();
 return <section className='section'>
  <div className="container">

   {item.map((data, index) => {
    const { recipe } = data;
    const { image, label, calories, cautions, ingredientLines, url } = recipe;
    return <div className='item-container' key={index}>
     <img src={image} alt="" />
     <h2>{label}</h2>
     {showDetail ?
      <div>
       <h4>Calories: {calories.toFixed(2)}</h4>
       <h4>Cautions: {cautions}</h4>

       {ingredientLines.map((item, index) => {
        return <h5 key={index}>Ingredient Line {index + 1}: {item}</h5>
       })}

       <a href={url}>See full recipe here</a>
      </div>
      : ''}
     <button type="submit" className='app_submit' onClick={changeDetailStatus}>{showDetail ? 'show Less' : 'Show More'}</button>

    </div>
   })}

  </div>
 </section>
}

export default SingleRecipe