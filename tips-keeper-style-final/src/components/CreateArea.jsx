import React, { useState } from "react";
import AddIcon from '@material-ui/icons/Add';

import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';

function CreateArea(props) {

    const [isExpanded, setExpanded] = useState(false);

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

    function expand() {
        setExpanded(true);
    }

    return (
        <div>
            <form className="create-note">
               {
                   isExpanded ?  <input 
                    name="title" 
                    value={note.title} 
                    placeholder="Título" 
                    onChange={handleChange}
                /> : null
               }
                <textarea 
                    name="content" 
                    onClick={expand}
                    value={note.content} 
                    placeholder="Descrição da nota..." 
                    rows={isExpanded ? 3 : 1} 
                    onChange={handleChange}
                />
                <Zoom in={isExpanded}>
                    <Fab onClick={submitNote}>
                        <AddIcon />
                    </Fab>
                </Zoom>
            </form>
        </div>
    )
}

export default CreateArea;