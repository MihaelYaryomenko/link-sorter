import { readFromLeftTextArea } from "../functions.js"

const ConvertBtn = () => {
    return (
        <div onClick={readFromLeftTextArea} id="convert-btn-container">
            <button id="convert-btn">Convert</button>
            <div id="shadow-convert-btn"></div>
        </div>
    )
}

export default ConvertBtn
