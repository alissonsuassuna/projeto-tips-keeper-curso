import React, { useState } from "react";

function CreateArea(props) {

    const [note, setNote] = useState({
        title: '',
        content: ''
    })

    function handleChange(event) {
        const {name, value} = event.target;

        setNote(prevNote => {
            return {
                ...prevNote,
                [name]: value
            }
        })
    }

    function submitNote(event) {
        props.onAdd(note)
        setNote({
            title: '',
            content: ''
        })
        event.preventDefault()
    }

    return (
        <div>
            <form>
                <input 
                    name="title" 
                    value={note.title} 
                    placeholder="Título" 
                    onChange={handleChange}
                />
                <textarea 
                    name="content" 
                    value={note.content} 
                    placeholder="Descrição da nota..." 
                    rows="3" 
                    onChange={handleChange}
                />
                <button onClick={submitNote}>Adicionar</button>
            </form>
        </div>
    )
}

export default CreateArea;