import React, { useState } from 'react'
import "./_filterInput.scss"
function Input({ value, title, name, color, checkbox, handleFilterChange, filterType, listbox }) {
    const [isActive, setIsActive] = useState(false)
    return (
        <>
            {
                !(listbox) ?
                    <label className={checkbox ? "checkbox-container" : "radio-container"}>
                        <p className='label'>{title}</p>
                        <input
                            value={value}
                            type={checkbox ? "checkbox" : "radio"}
                            name={name}
                            onChange={(e) => { handleFilterChange(filterType, e.target.value) }} />
                        <span className={checkbox ? "checkmarkk" : "checkmark"}>
                        </span>
                    </label >
                    :
                    <>
                        <div className={`filter-options ${isActive && 'option-active'}
                         ${filterType === "Color" && "color-options"}`}
                            style={{ background:filterType === "Color" && color }}
                            onClick={() => { setIsActive(!isActive); handleFilterChange(filterType, value) }}>
                            {filterType !== "Color" &&
                                <p>{title}</p>}
                            <span className={(filterType === "Color" && isActive) && 'color-options-active'}
                            style={{ background: color==="White"? "black":"white" }}></span>
                        </div>
                    </>
            }
        </>
    )
}
export default Input;
