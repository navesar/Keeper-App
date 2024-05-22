import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import Create from "./Create";
// import notes from "../notes"



function App() {
	const [notes, setNotes] = React.useState([]);

	

	function addNote(noteObj) {
		if (notes.includes(noteObj)){
			alert("this note already exists");
		}
		else{
			setNotes((prevNotes) => [...prevNotes, noteObj])
		}
	}

	function deleteNote(noteId){
		setNotes((prevNotes) => notes.filter((note, index) => index +1 != noteId))
	}

	function createNote(noteObj, key) {
		return (
			<Note
				key={key}
				id={key}
				title={noteObj.title}
				content={noteObj.content}
				onDelete={deleteNote}
			/>
		);
	}


	return (
		<div>
			<Header />
			<Create onAdd={addNote}/>
			{notes.map((noteObj, index) => createNote(noteObj, index+1))}
			<Footer />
		</div>
	);
}

export default App
