import React from 'react'

// export default function Hello({text, children}){
//     return ( 
//         <>
//             <h1>{text}</h1>
//             {children}
//         </>
//      );
// }
 
const Hello =({text,children}) => (
    <>
        <h1>{text}</h1>
        {children}
    </>
);

export default Hello;

