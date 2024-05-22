import React from "react";

function Create(props) {
    const [noteObj, setNoteObj] = React.useState({ title: "", content: "" });


    function handleChange(event){
        const fieldName = event.target.name;
        const fieldValue = event.target.value;
        setNoteObj((oldNoteObj) => (
            {
                ...oldNoteObj, 
                [fieldName]: fieldValue
            }))
    }

    function handleAdd(event) {
        event.preventDefault();
        if (noteObj.title === "" || noteObj.content === ""){
            alert("A title and a content must be filled");
        }
        else{
            noteObj.title = noteObj.title.trim()
            noteObj.content = noteObj.content.trim()
            props.onAdd(noteObj);
            setNoteObj({ title: "", content: "" })
        }
    }

  return (
    <div>
      <form>
        <input name="title" placeholder="Title" value={noteObj.title} onChange={handleChange}/>
        <textarea name="content" placeholder="Take a note..." rows="3" value={noteObj.content} onChange={handleChange}/>
        <button onClick={handleAdd}>Add</button>
      </form>
    </div>
  );
}

export default Create;