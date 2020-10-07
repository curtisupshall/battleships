import React from 'react'
import classNames from 'classnames'

import { ShipType } from '../../../api/src/types'

interface IShipSegmentProps {
    type: ShipType
    hit: boolean
}

const ShipSegment = (props: IShipSegmentProps) => {
    const { type, hit } = props
    return (
        <div className={classNames('ship-segment', `--${type}`, { '--hit': hit })} />
    )
}

export default ShipSegment
