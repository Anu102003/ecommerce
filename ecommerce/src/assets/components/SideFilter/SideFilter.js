import React from 'react'
import { FilterComponents } from '../FilterComponents/FilterComponents'
import "./_sideFilter.scss"
export const SideFilter = ({ menu, categoryArray, patternArray, materialArray, sleeveTypeArray, colorArray, brandArray, sizeArray, handleFilterChange }) => {
  return (
    <div className='sidefilter-container'>
      <FilterComponents filterFields={categoryArray} handleFilterChange={handleFilterChange} filterType="Category" checkbox={true} listbox={false} />
      <FilterComponents filterFields={brandArray} handleFilterChange={handleFilterChange} filterType="Brand" checkbox={true} listbox={false} />
      <FilterComponents handleFilterChange={handleFilterChange} filterType="Price" checkbox={false} listbox={false} />
      <FilterComponents filterFields={colorArray} handleFilterChange={handleFilterChange} filterType="Color" checkbox={true} listbox={true} />
      <FilterComponents handleFilterChange={handleFilterChange} filterType="Discount" checkbox={false} listbox={false} />
      {
        (menu === "Men" || menu === "Women") &&
        <>
          <FilterComponents filterFields={sizeArray} filterType="Size" handleFilterChange={handleFilterChange} checkbox={true} listbox={true} />
          <FilterComponents filterFields={patternArray} handleFilterChange={handleFilterChange} filterType="Pattern" checkbox={true} listbox={false} />
          <FilterComponents filterFields={materialArray} handleFilterChange={handleFilterChange} filterType="Material" checkbox={true} listbox={false} />
        </>
      }
      {/* <FilterComponents filterFields={sleeveTypeArray} handleFilterChange={handleFilterChange} filterType="Sleeve Type" checkbox={true} listbox={false} /> */}
    </div>
  )
}
