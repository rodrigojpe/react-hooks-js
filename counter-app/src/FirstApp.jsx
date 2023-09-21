// import { Fragment } from "react"
import PropTypes from 'prop-types'

export const FirstApp = ({ title, subTitle, name} ) => {


  return (
    <>
        <h1> { title  }  </h1>
        <p>{ subTitle} </p>
        <p>{ name} </p>

    </>
  )
}

FirstApp.protoType = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string
}
// se inicializan properties por defecto
FirstApp.defaultProps = {
  name:'Rodrigo Jeldes ',
  subTitle: 'No hay subtitulo',
  title: 'No hay titulo',
}