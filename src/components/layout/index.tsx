import * as C from "./style";
import { useState } from "react";
import TextHtml from "../TextHtml";
import useSplit from "../../hooks/SplitScreen";

function Layout() {
    const initialValue = localStorage.getItem("data")
        ? localStorage.getItem("data")
        : "";

    const [markdownTextArea, setMarkdownTextArea] = useState(initialValue);
    const { onMouseDown, windowSize } = useSplit();

    function writeText(e: React.ChangeEvent<HTMLTextAreaElement>) {
        setMarkdownTextArea(e.currentTarget.value);
        if (markdownTextArea) localStorage.setItem("data", markdownTextArea);
    }

    return (
        <>
            <C.Left width={windowSize}>
                <C.MarkdownInput
                    autoFocus
                    id='editor'
                    placeholder='Digite Algo'
                    value={markdownTextArea ?? ""}
                    onChange={writeText}
                ></C.MarkdownInput>
            </C.Left>
            <C.DragBar onMouseDown={onMouseDown}></C.DragBar>
            <C.Rigth width={100 - windowSize}>
                <TextHtml textArea={markdownTextArea ?? ""} />
            </C.Rigth>
        </>
    );
}
export default Layout;
