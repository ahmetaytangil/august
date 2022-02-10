import React from 'react'

export default function CheckBoxCities({ title, cityId, onClick, selected }) {
    return (
        <div>
            <input
                type="checkbox"
                id={cityId}
                name="cities"
                value={cityId}
                className="mr-2"
                onClick={onClick}
                checked={selected.includes(cityId) ? "checked" : ""}
            />
            <label
                htmlFor={cityId}
                className="mb-1"
            >
                {title}
            </label>
        </div>
    )
}
