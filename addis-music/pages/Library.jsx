import styled from "styled-components"
import React from "react"

// const Card = styled.div `
//     background: "Pink";`;

// <{$type?:Boolean;}>`
//     background: ${props=>props.$type? "Green": "Red"};
//     width: 30px; `;

export default function () {
    return (<div>
        <p>Library Page</p>
        <img src="/library.png" alt="lib" width={50} height={50}/>
    </div>
    )
}