import React, { useState } from "react";
import "src/css/App.css";
const AnimatedCircle = () => {
    const [animationDuration, setAnimationDuration] = useState(2); // Установите значение по умолчанию

    return (
        <div>
            <input
                type="number"
                value={animationDuration}
                onChange={(e) => setAnimationDuration(e.target.value)}
            />
            <div
                className="circle"
                style={{ "--animation-duration": `${animationDuration}s` }}
            ></div>
        </div>
    );
};

export default AnimatedCircle;
