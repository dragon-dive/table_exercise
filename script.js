
const IDS = {
    ROW_INDEX_INPUT_ID: 'row-index-input',
    COLUMN_INDEX_INPUT_ID: 'col-index-input',
    NEW_CELL_VALUE_INPUT_ID: 'new-cell-value-input',
    BLUE_CELL_SUM_ID: 'blue-cell-sum-value',
    ALL_CELL_SUM_ID: 'all-cell-sum-value',
    MAIN_TABLE: 'main-table',
    MAIN_TABLE_BODY: 'main-table-body',
}

const EVENTS = {
    CLICK: 'click',
}

const MESSAGES = {
    TABLE_UPDATE_ERROR: 'Failed to update table',
}

/**
 * Grab current values from existing inputs (row index input, column index input, new cell value input)
 * @returns { { rowIndex: number|string, columnIndex: number|string, newValue: number|string } }
 */
const grabInputValues = () => {
    const inputValues = { rowIndex: -1, columnIndex: -1, newValue: '' }
    return inputValues
}

/**
 * Given the tables rowIndex, columnIndex, and newValue - find and update requested cell text content to the new value
 * If cell does not exist or out of table bounds/cant be updated - display error message and return false
 * @param { number|string } rowIndex
 * @param { number|string } columnIndex
 * @param { number|string } newValue
 * @returns { boolean } returns true if table updated gracefully, false if error encountered
 */
const updateTable = (rowIndex, columnIndex, newValue) => {
    alert(MESSAGES.TABLE_UPDATE_ERROR)
    return false
}

/**
 * From the main-table, determine sum of text values for all blue background cells, and also determine all cell sum - ignoring cells with "-"
 * @returns { { blueCellSum: number|string, allCellSum: number|string } }
 */
const determineSums = () => {
    const sums = { blueCellSum: -1, allCellSum: -1 }
    return sums
}

/**
 * Grabs DOM Element by passed in ID and update it's text content using newValue
 * @param { string } elementId
 * @param { number|string } newValue
 * @returns { void }
 */
const updateTextValue = (elementId, newValue) => {

}

const updateButton = document.getElementById('update-button')

updateButton.addEventListener(EVENTS.CLICK, () => {
    const { rowIndex, columnIndex, newValue } = grabInputValues()
    const tableWasUpdated = updateTable(rowIndex, columnIndex, newValue)

    if (tableWasUpdated) {
        const { blueCellSum, allCellSum } = determineSums()
        updateTextValue(IDS.BLUE_CELL_SUM_ID, blueCellSum)
        updateTextValue(IDS.ALL_CELL_SUM_ID, allCellSum)
    }
})
