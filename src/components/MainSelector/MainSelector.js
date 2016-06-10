import React from 'react'
import { IndexLink, Link } from 'react-router'


export const MainSelector = () => {
    return (
      <div id="main-selector">
          <label for="select"><h3>View Multnomah</h3></label>
          <select name="select" value="select">
            <option value="Lorem Ipsum">Crop Production</option>
            <option value="Lorem Ipsum">Subsidies</option>
            <option value="Lorem Ipsum">Crop Revenue</option>
            <option value="wheat">Wheat</option>
            <option value="corn">Corn</option>
            <option value="grass seed">Grass Seed</option>
            <option value="potatoes">Potatoes</option>
            <option value="dairy">Dairy</option>
            <option value="hazel nuts">Hazel Nuts</option>
            <option value="apples">Apples</option>
            <option value="cherries">Cherries</option>
          </select>
      </div>
    )
}

export default MainSelector
