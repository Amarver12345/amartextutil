import React, { useState }  from 'react'
export default function TextForm(props) {
  function handleClear(){
    settext('')
    props.Showalert("Text Cleared","success");
  }
  function handleUpClick(){
    //console.log("Uppercase was clicked"+text);
    let newtext=text.toUpperCase();
    settext(newtext)
    props.Showalert("Converted To Upper Case","success");
  }
  function handleLowClick(){
    //console.log("Uppercase was clicked"+text);
    let newtext=text.toLowerCase();
    settext(newtext)
    props.Showalert("Converted To Lower Case","success");
  }
  function handleOnChange(event){
    settext(event.target.value)

  }
// const [stylebtn, setstylebtn] = useState("Enable Dark Mode");
// const [MyStyle, setMyStyle] = useState({backgroundColor:'white',color : 'black'});
const [text, settext] = useState("Enter text here !");

  return (
    <>
      <div  className='container' style={{color : props.mode==='dark'?'white':'black'}}>
        <div className="form-group mb-3">
        <h1>{props.heading}</h1>
        <textarea style={{backgroundColor : props.mode==='dark'?'#13466e':'white',color : props.mode==='dark'?'white':'black'}} className="form-control" onChange={handleOnChange} value={text} id="exampleFormControlTextarea1" rows="8"></textarea>
        </div>
        <button className='btn btn-primary mx-1' onClick={handleUpClick}>Change to UpperText</button>
        <button className='btn btn-primary mx-1' onClick={handleLowClick}>Change to LowerText</button>
        <button className='btn btn-primary mx-1' onClick={handleClear}>Clear Text</button>
        {/* <button className='btn btn-primary mx-1' onClick={toggleButton}>{stylebtn}</button> */}
        
        
      </div>
      <div className='container my-3' style={{color : props.mode==='dark'?'white':'black'}}>
        <h2>Your Text Summary</h2>
        <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters </p>
      </div>
    </>
  )
}