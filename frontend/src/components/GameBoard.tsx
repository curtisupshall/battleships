import React from 'react'

import { IGameBoard } from '../../../api/src/types'
import { getCellLetterFromNumber } from '../utils'

import ShipSegment from './ShipSegment'

interface IGameBoardProps {
    gameboard?: IGameBoard
}

const GameBoard = (props: IGameBoardProps) => {
    const width: number = 9
    const height: number = 9
    let x = getCellLetterFromNumber(height)

    const table: string[][] = []
    for (let i: number = 0; i < height; i ++) {
        table.push([])
        for (let j: number = 0; j < width; j ++) {
            table[i].push('test')
        }
    }

    return (
        <section className='gameboard'>
            <table className='gameboard__table'>
                <tr>
                    <td />
                    {table[0].map((column: string, i: number) => (
                        <td className='gameboard__row-num'>{i}</td>
                    ))}
                </tr>
                {table.map((row: string[], i: number) => (
                    <tr className='gameboard__row'>
                        <td className='gameboard__column-num'>{getCellLetterFromNumber(i)}</td>
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
