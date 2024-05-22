import React from "react";

function Note(props) {
	const [cross, setCross] = React.useState(false);
	const id = props.id

	function handleDelete() {
		props.onDelete(id)
	}

	return (
		<div className="note" onClick={() => setCross(!cross)} style={{ textDecoration: cross ? "line-through" : null }}>
			<h1>{props.title}</h1>
			<p>{props.content}</p>
			<button onClick={handleDelete}>DELETE</button>
		</div>
	);

}

export default Note;