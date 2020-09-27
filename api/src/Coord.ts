class Coord {
    readonly x: number
    readonly y: number

    constructor(x: number, y: number) {
        this.x = x
        this.y = y
    }

    /**
     * Determines if two points are equal.
     * @param other The other Coord
     */
    equals = (other: Coord): boolean => {
        return this.x === other.x && this.y === other.y
    }
}

export default Coord
