import React from 'react'

import ShipSegment from './ShipSegment'

interface IGameBoardProps {

}

const GameBoard = (props: IGameBoardProps) => {
    const table: string[][] = []
    for (let i: number = 0; i < 9; i ++) {
        table.push([])
        for (let j: number = 0; j < 9; j ++) {
            table[i].push('test')
        }
    }
    return (
        <section className='gameboard'>
            <table className='gameboard__table'>
                {table.map((row: string[], i: number) => (
                    <tr className='gameboard__row'>
                        {table[i].map((entry: string) => (
                            <td className='gameboard__cell'>
                                <ShipSegment type='destroyer' hit={true} />
                            </td>
                        ))}
                    </tr>
                ))}
            </table>
        </section>
    )
}

export default GameBoard
