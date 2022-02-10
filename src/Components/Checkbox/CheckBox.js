import React from 'react'
import { connect } from 'react-redux'

function CheckBox({ checkId, title, paramId, onClick, selected_paramTypes }) {
    return (
        <div>
            <input
                type="checkbox"
                id={checkId}
                name="params"
                value={paramId}
                className="mr-2"
                onClick={onClick}
                checked={selected_paramTypes.includes(checkId) ? "checked" : ""}
            />
            <label
                htmlFor={checkId}
                className="mb-1"
            >
                {title}
            </label>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        selected_paramTypes: state.filterSearchList.selected_paramTypes
    }
}

export default connect(mapStateToProps)(CheckBox);

