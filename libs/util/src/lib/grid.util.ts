export type GridCell<T> = { row: number; col: number; item: T | null }

/**
 * A generic grid structure to hold items of type T in a 2D table.
 */
export class Grid<T> {
    private table: (T | null)[][] = []

    setTable(table: (T | null)[][]) {
        this.table = table
    }

    setItem(row: number, col: number, item: T) {
        // Defensive input validation
        if (!Number.isInteger(row) || !Number.isInteger(col)) {
            throw new TypeError('row and col must be integer indices')
        }
        if (row < 0 || col < 0) {
            throw new RangeError('row and col must be non-negative')
        }

        // Ensure grid has at least one row when starting from empty state
        if (this.table.length === 0) {
            // initialize with a single empty row, will be expanded below as necessary
            this.table.push([])
        }

        // If the requested row doesn't exist, create missing rows
        if (row >= this.getRowsCount()) {
            for (let r = this.getRowsCount(); r <= row; r++) {
                this.fillRow(r)
            }
        }

        // Ensure every existing row has an array (defensive)
        for (let r = 0; r < this.getRowsCount(); r++) {
            if (!Array.isArray(this.table[r])) {
                this.table[r] = []
            }
        }

        // If columns are missing, create missing columns
        if (col >= this.getColsCount()) {
            for (let c = this.getColsCount(); c <= col; c++) {
                this.fillColumn(c)
            }
        }

        // At this point the cell should be addressable. Assign safely.
        if (!Array.isArray(this.table[row])) {
            this.table[row] = []
        }
        this.table[row][col] = item
    }

    setItemsHorizontally(row: number, startCol: number, items: T[]) {
        for (let i = 0; i < items.length; i++) {
            this.setItem(row, startCol + i, items[i])
        }
    }

    getItem(row: number, col: number): T | null {
        // Defensive guards: must be integer indices and non-negative
        if (!Number.isInteger(row) || !Number.isInteger(col)) return null
        if (row < 0 || col < 0) return null
        if (row >= this.table.length) return null
        const r = this.table[row]
        if (!Array.isArray(r)) return null
        if (col >= r.length) return null
        return r[col]
    }

    isEmpty(row: number, col: number): boolean {
        const item = this.getItem(row, col)
        return item === null || item === undefined
    }

    findFirstEmptyRow(col: number): number {
        const row = this.table.findIndex((_val, row) => this.isEmpty(row, col))
        return row === -1 ? this.getRowsCount() : row
    }

    findFirstEmptyCol(): number {
        for (let col = 0; col < this.getColsCount(); col++) {
            const colValues = this.table.map((row) => row[col])
            if (
                colValues.every((cell) => cell === null || cell === undefined)
            ) {
                return col
            }
        }
        // if not available, send the last col index
        return this.getColsCount()
    }

    getGridCells(ignoreEmptyCells: boolean): GridCell<T>[] {
        const positions: GridCell<T>[] = []
        for (let row = 0; row < this.getRowsCount(); row++) {
            for (let col = 0; col < this.getColsCount(); col++) {
                const item = this.getItem(row, col)
                if (ignoreEmptyCells && item !== null && item !== undefined) {
                    positions.push({ row, col, item })
                } else {
                    positions.push({ row, col, item: item ? item : null })
                }
            }
        }
        return positions
    }

    getColumn(col: number): (T | null)[] {
        const columnValues: (T | null)[] = []
        for (let row = 0; row < this.getRowsCount(); row++) {
            columnValues.push(this.getItem(row, col) ?? null)
        }
        return columnValues
    }

    getRow(row: number): (T | null)[] {
        const rowValues: (T | null)[] = []
        for (let col = 0; col < this.getColsCount(); col++) {
            rowValues.push(this.getItem(row, col) ?? null)
        }
        return rowValues
    }

    getNonEmptyColumnCells(col: number): GridCell<T>[] {
        const cells: GridCell<T>[] = []
        for (let row = 0; row < this.getRowsCount(); row++) {
            const item = this.getItem(row, col)
            if (item !== null && item !== undefined) {
                cells.push({ row, col, item })
            }
        }
        return cells
    }

    getNonEmptyRowCells(row: number): GridCell<T>[] {
        const cells: GridCell<T>[] = []
        for (let col = 0; col < this.getColsCount(); col++) {
            const item = this.getItem(row, col)
            if (item !== null && item !== undefined) {
                cells.push({ row, col, item })
            }
        }
        return cells
    }

    findCellByItemId(
        id: string,
        idGetter: (item: T) => string,
    ): GridCell<T> | null {
        for (let row = 0; row < this.getRowsCount(); row++) {
            for (let col = 0; col < this.getColsCount(); col++) {
                const item = this.getItem(row, col)
                if (item && idGetter(item) === id) {
                    return { row, col, item }
                }
            }
        }
        return null
    }

    getRowsCount(): number {
        return this.table.length
    }

    getColsCount(): number {
        return this.table[0]?.length || 0
    }

    fillColumn(col: number, value: T | null = null) {
        if (!Number.isInteger(col) || col < 0) {
            throw new TypeError('col must be a non-negative integer')
        }
        for (let row = 0; row < this.getRowsCount(); row++) {
            if (!Array.isArray(this.table[row])) {
                this.table[row] = []
            }
            this.table[row][col] = value
        }
    }

    fillRow(row: number, value: T | null = null) {
        if (!Number.isInteger(row) || row < 0) {
            throw new TypeError('row must be a non-negative integer')
        }
        // Ensure the row exists
        while (row >= this.getRowsCount()) {
            this.table.push([])
        }
        if (!Array.isArray(this.table[row])) {
            this.table[row] = []
        }
        for (let col = 0; col < this.getColsCount(); col++) {
            this.table[row][col] = value
        }
    }
}
