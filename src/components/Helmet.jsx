import React from 'react'
import PropTypes from 'prop-types'

const Helmet = props => {
    document.title = 'Gucci - ' + props.title
  return (

    <div className="helmet">{props.children}</div>
  )
}

Helmet.propTypes = {
    title: PropTypes.string.isRequired
}

export default Helmet