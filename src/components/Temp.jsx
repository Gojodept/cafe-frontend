// export default function Temp(flag){
//     if (flag)
//     return(
//         <>
//         <h2>flag is true </h2>
//         </>
//     );
//     else return <h2>flage is flase</h2>

// }
// export default function Temp(flag){
// return flag?<h1>The flag is true</h1>:<>the flag is false</>
// }

// export default function Temp(flag){
// return flag && <h1>Temp is true</h1>// when true then it will display otherwise nothing
// }

// export default function Temp(){
//     const handleClick=()=>{
//         alert("Yes What happened")
//     };
//     const handleSubmit=(name)=>{
//         alert(`What happened ${name}`);
//     }
//     return(
//         <div>
//             <button onClick={handleClick}>Click</button>
//             <button onClick={()=>handleSubmit("Ari")}>Query</button>
//         </div>
//     )
// }
import { useState } from "react";
export default function Temp() {
  const [score, setScore] = useState(0);
  const updateScore =()=>{
    setScore(score+1);
  }
    const update =()=>{
    setScore(score-1);
  }
  return (
    <div>
      {score}
      <p>
        <button onClick={updateScore}>Increase Score</button>
        <button onClick={update}>Reduce Score</button>
      </p>
    </div>
  );
}
