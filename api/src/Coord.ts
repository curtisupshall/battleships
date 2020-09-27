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

    /**
     * Transforms the Coord into an array of two numbers, used for JSON encoding Coords.
     * @return The x and y value of the Coord in a single array
     */
    toArray = (): [number, number] => {
        return [this.x, this.y]
    }
}

export default Coord
