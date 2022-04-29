import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Note from "./Note";

import arrayNotes from '../notes';


console.log(arrayNotes)

function App() {
    return (
        <div>
            <Header />
            {arrayNotes.map((noteItem) => {
                return (
                    <Note
                        key={noteItem.id}
                        title={noteItem.title}
                        content={noteItem.content}
                    />
                )
            })}
            <Footer />
        </div>
    )
        
}

export default App;