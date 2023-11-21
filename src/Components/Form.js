    import React ,{useState} from 'react';




    const Form = (props) => {
        const[text,settext] = useState("Enter Text Here");
        const handleoncclick = () =>{
                console.log("onclick");
                let newtext =text.toUpperCase();
                settext(newtext);
                props.showalert("coverted to upper case","success");
        }
        const handleonchange = (event) =>{
            console.log("onchange");
            settext(event.target.value);
    }
    const handlelocclick = () =>{
        console.log("onclick");
        let newtext =text.toLowerCase();
        settext(newtext);
        props.showalert("coverted to lower case","success");
    }
    const handleonclear = () =>{
        
        let newtext ="";
        settext(newtext);
        props.showalert("Text has been cleared","success");
    }
    const handleonremove = () =>{
            let newtext =text.split(/[ ]+/);
            settext(newtext.join(" "));
            props.showalert("Extra spaces removed","success");
    }
    const handleoncopy = () =>{
        navigator.clipboard.writeText(text);
        props.showalert("Copy Text Successfully","success");
}

        return (
        <>
    <div className='container' style={{color:props.mode === 'dark'? 'white':'black'}} >
        <h1>{props.Title}</h1>
    <div className="mb-3" >

    <textarea className="form-control" id="exampleFormControlTextarea1" value={text} style={{backgroundColor:props.mode === 'dark'? '#3f3939':'white',color:props.mode === 'dark'? 'white':'black'}}  onChange={handleonchange}  rows="8"></textarea>
    </div>
            <button disabled = {text.length===0}className="btn btn-secondary mx-2"  onClick={handleoncclick}>Convert to uppercase</button>
            <button disabled = {text.length===0}className='btn btn-secondary my-2 mx-2'  onClick={handlelocclick}>Convert to lowercase</button>
            <button disabled = {text.length===0}className='btn btn-secondary my-2 mx-2'  onClick={handleonclear}>Clear text</button>
            <button disabled = {text.length===0}className='btn btn-secondary my-2 mx-2'  onClick={handleonremove}>Remove spaces</button>
            <button disabled = {text.length===0}className='btn btn-secondary my-2 mx-2'  onClick={handleoncopy}>Copy Text</button>
            </div>
            <div className='container' style={{color:props.mode === 'dark'? 'white':'black'}} >
                <h2>Your Text Summary</h2>
                <p>{text.split(/\s+/).filter((element)=>{return element.length!=0}).length} Words  {text.length} Characters</p>
                <h2 >Preview</h2>
                <p>{text.length>0?text:'Enter some lines'}</p>
            </div>
        </>
        
        
        );
    }

    export default Form;