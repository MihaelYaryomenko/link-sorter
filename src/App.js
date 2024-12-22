import "./App.css"
import githubSvg from "./images/Vector.svg"
import ellipseBg from "./images/Ellipse 1.svg"
import ConvertBtn from "./components/ConvertBtn"

function App() {
    return (
        <div className="App">
            <div id="main-container">
                <div id="main-main-container">
                    <div id="text-container">
                        <p id="sorting-p">Sorting</p>
                        <p id="links-p">Links</p>
                    </div>
                    <div id="textarea-container">
                        <div id="left-area" className="column-functional-area">
                            <textarea
                                className="textarea-shadow"
                                name=""
                                id="input-area"
                                placeholder="Place links here"
                            ></textarea>
                            <div id="odd-cases">
                                <div className="checkbox-container">
                                    <input
                                        id="http-label"
                                        name="httpLabel"
                                        type="checkbox"
                                    />
                                    <label htmlFor="httpLabel">https://</label>
                                </div>

                                <div className="checkbox-container">
                                    <input name="wwwLabel" type="checkbox" />
                                    <label htmlFor="wwwLabel">www.</label>
                                </div>
                            </div>
                            <textarea
                                placeholder="Enter to ignore"
                                name="notOddCases"
                                id="not-odd-cases"
                            ></textarea>
                        </div>
                        <div id="right-area" className="column-functional-area">
                            <textarea
                                className="textarea-shadow"
                                name=""
                                readonly="readonly"
                                id="output-area"
                            ></textarea>
                            <ConvertBtn />
                        </div>
                    </div>
                </div>
            </div>
            <div id="footer">
                <div id="github-link">
                    <div id="github-logo">
                        <img src={ellipseBg} alt="" id="ellipse-bg" />
                        <img src={githubSvg} alt="" id="github-svg" />
                    </div>
                    <div id="paragraph-container-no-reason">
                        <p id="github-p">MihaelYaryomenko</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App
