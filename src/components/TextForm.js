import React, {useState} from 'react'


export default function TextForm(props) {
	const [text,setText] = useState("Enter text here2")
	
	const handleClick = () =>{
		console.log("Uppercase was clicked")
		let newText = text.toUpperCase();
setText(newText)
	}
	const handleChange = (event) =>{
		console.log("Handling change")
		setText(event.target.value)
	}
	const handleClear = (event) =>{

		setText("");
	}

	const handleCopy = ()=>{
		let text = document.getElementById("myText");
		text.select();
		navigator.clipboard.writeText(text.value);

	}

	const removeExtraSpaces = () =>{
		let nt = text.split(/[ ]+/);
		setText(nt.join(" "))
	}
  return (
	<>
<div className="mb-3 container">
<h1>{props.heading} </h1>
  
  <textarea className="form-control" id="myText" rows="5" value={text} onChange={handleChange}></textarea>
<button className="btn btn-primary mx-3" onClick={handleClick}>Convert to UpperCase</button>
<button className="btn btn-primary mx-3" onClick={handleClear}>Clear</button>
<button className="btn btn-primary mx-3" onClick={removeExtraSpaces}>RemoveExtraSpace</button>
<button className="btn btn-primary" onClick={handleCopy}>Copy</button>

</div>
 <div className="container my-5">
	<h1>Your text Summary</h1>
	<p>
 {text.length} characters <br/>
 {text.split(" ").length} words <br/>
 <h2>Preview</h2>
 <p>{text}</p>
	</p>
 </div>
</>
  )
}
