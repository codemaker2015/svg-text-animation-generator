import React, { Fragment } from 'react'
import Git from './Git'
import Bmc from './Bmc'
const Header = () => {
    return (
        <Fragment>
            <div>
                <h1 className="title">SVG Text Animation Generator</h1>
            </div>
            <div className="extras">
                <Git />
            </div>
            <Bmc />
        </Fragment>

    )
}

export default Header
