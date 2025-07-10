import "./Home.css"
export default function Home({name,age}){
  let id=12213427
  return (
    <div>
    <h1>Hello {name}.You are {age} years old</h1>
    <h2 className="App-Home-Header">Hello {name}.You are {age} years old</h2>
    <p>This is the id {id}</p>
    </div>
    );
    //is parent element and one parent element is compulsory 
}
