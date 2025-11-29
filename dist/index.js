import { useState, useEffect } from 'react';

function useMouse() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    useEffect(() => {
        const handle = (e) => {
            setMousePosition({
                x: e.pageX,
                y: e.pageY,
            });
        };
        document.addEventListener("mousemove", handle);
        return () => document.removeEventListener("mousemove", handle);
    }, []);
    return mousePosition;
}

export { useMouse };
