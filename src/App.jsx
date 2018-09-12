import React from 'react'
import { translate } from 'react-i18next'
import PropTypes from 'prop-types';
import Registration from './containers/Registration/Registration'

const app = (props) => {
  return (
    <div className="App">
      <Registration t={props.t} i18n={props.i18n} />
    </div>
  )
}

app.propTypes = {
  t: PropTypes.func.isRequired
}

export default translate('translations')(app)
