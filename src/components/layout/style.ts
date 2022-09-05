import styled from "styled-components";

export const Left = styled.div<{ width: number }>`
    width: ${(props) => `${props.width}%`};

    height: 100%;

    @media (max-width: 900px) {
        height: ${(props) => `${props.width}%`};

        width: 100%;
    }
`;

export const Rigth = styled.div<{ width: number }>`
    font-size: 1rem;

    padding: 5px;

    width: ${(props) => `${props.width}%`};
    height: 100%;

    @media (max-width: 900px) {
        height: ${(props) => `${props.width}%`};

        width: 100%;
    }
`;

export const DragBar = styled.div`
    display: flex;
    align-items: center;

    position: relative;

    background-color: grey;

    width: 10px;
    height: 100%;

    cursor: col-resize;

    &::after {
        position: absolute;

        content: "";

        width: 3px;
        height: 50px;

        left: 1px;

        background-color: black;
    }

    &::before {
        position: absolute;

        content: "";

        width: 3px;
        height: 50px;

        right: 1px;

        background-color: black;
    }

    @media (max-width: 900px) {
        width: 100%;
        height: 10px;

        justify-content: center;

        cursor: row-resize;

        &::after {
            position: absolute;

            content: "";

            width: 50px;
            height: 3px;

            top: 1px;
            left: auto;

            background-color: black;
        }

        &::before {
            position: absolute;

            content: "";

            width: 50px;
            height: 3px;

            bottom: 1px;
            right: auto;

            background-color: black;
        }
    }
`;

export const MarkdownInput = styled.textarea`
    padding: 5px;

    font-size: 1rem;

    width: 100%;
    height: 100%;

    resize: none;

    border: none;
    outline: none;
`;
