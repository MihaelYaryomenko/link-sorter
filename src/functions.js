const readFromLeftTextArea = () => {
    const textArea = document.getElementById("input-area")
    const checkboxHttp = document.getElementById("http-label")
    const strUnsort = textArea.value
    let strArray = stringToArray(strUnsort)
    console.log(strArray)
    if ((checkboxHttp.value = true)) {
        removeHttps(strArray)
    }
    mergeSort(strArray)
    const sortedArray = strArray
    console.log(sortedArray)
    const strSort = writeIntoString(sortedArray)
    console.log(strSort)

    writeIntoRightTextArea(strSort)
}

const writeIntoRightTextArea = (whatToPass) => {
    const rightTextArea = document.getElementById("output-area")
    rightTextArea.value = whatToPass
}

const latinAlphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
]

const removeHttps = (array) => {
    for (let i = 0; i < array.length; i++) {
        if (array[i].startsWith("https://")) {
            array[i].replace("https://", "")
        }
    }
}

function stringToArray(inputString) {
    let stringArray = inputString.split("\n")

    return stringArray
}

function mergeSort(array) {
    const length = array.length

    if (length <= 1) return

    const middle = length / 2
    let leftArray = []
    let rightArray = []

    let i = 0
    let j = 0

    for (; i < length; i++) {
        if (i < middle) {
            leftArray[i] = array[i]
        } else {
            rightArray[j] = array[i]
            j++
        }
    }
    mergeSort(leftArray)
    mergeSort(rightArray)
    merge(leftArray, rightArray, array)
}

function merge(leftArray, rightArray, array) {
    let leftSize = array.length / 2
    let rightSize = array.length - leftSize

    let i = 0
    let l = 0
    let r = 0

    while (l < leftSize && r < rightSize) {
        if (leftArray[l] < rightArray[r]) {
            array[i] = leftArray[l]
            i++
            l++
        } else {
            array[i] = rightArray[r]
            i++
            r++
        }
    }
    while (l < leftSize) {
        array[i] = leftArray[l]
        i++
        l++
    }
    while (r < rightSize) {
        array[i] = rightArray[r]
        i++
        r++
    }
}

function writeIntoString(array) {
    let buffer = ""
    array.forEach((element) => {
        buffer = buffer + element + "\n"
    })
    return buffer
}

export { readFromLeftTextArea }
