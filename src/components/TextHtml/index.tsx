import { marked } from "marked";

interface Props {
    textArea: string;
}

function TextHtml({ textArea }: Props) {
    function getMarkdownText() {
        const rawMarkdown = marked.parse(textArea);

        return { __html: rawMarkdown };
    }

    return <div dangerouslySetInnerHTML={getMarkdownText()} />;
}
export default TextHtml;
