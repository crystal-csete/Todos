import React from 'react'
import FilterLink from '../containers/FilterLink'
import './Options.css'

const Options = () => (
  <p className="options_container">
    Show:
    <FilterLink filter="SHOW_ALL">
      All
    </FilterLink>
    <FilterLink filter="SHOW_ACTIVE">
      Active
    </FilterLink>
    <FilterLink filter="SHOW_COMPLETED">
      Completed
    </FilterLink>
  </p>
)

export default Options