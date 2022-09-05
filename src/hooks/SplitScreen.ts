import { useState } from "react";

function useSplit() {
    const [windowSize, setWindowSize] = useState(48);

    function onMouseDown() {
        function onMouseMove(e: MouseEvent) {
            if (window.innerWidth <= 900) {
                if (windowSize > 20)
                    setWindowSize((e.clientY / window.innerHeight) * 100);
                else setWindowSize(29);
            } else {
                if (windowSize > 20)
                    setWindowSize((e.clientX / window.innerWidth) * 100);
                else setWindowSize(29);
            }
        }

        function onMouseUp() {
            document.removeEventListener("mousemove", onMouseMove);

            document.removeEventListener("mouseup", onMouseUp);
        }

        document.addEventListener("mousemove", onMouseMove);
        document.addEventListener("mouseup", onMouseUp);
    }

    return { onMouseDown, windowSize };
}
export default useSplit;
