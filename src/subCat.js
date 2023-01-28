import React, { useState } from 'react'

const SubCat = () => {
    const [subCategory, setSubCategory] = useState("")
  return (
    <div>
        <label>
                           Choose your sub-category?
                         </label>
                         <div>
                             <select className='category' value={subCategory}  onChange={(e)=>{setSubCategory(e)}}>
                               <option value="fruit">Fruit</option>
                               <option value="vegetable">Vegetable</option>
                               <option value="meat">Meat</option>
                             </select>
                         </div>
    </div>
  )
}

export default SubCat