import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import { Motion, spring } from 'react-motion';

interface LetterMenuProps {
    letter: string,
    expandingString: string,
}

function LetterMenu(props: LetterMenuProps) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div>{props.expandingString}</div>
    );
}

export default LetterMenu;