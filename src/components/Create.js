import { useState } from "react";

function Create(){

    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [cover, setCover] = useState('');

    const handleSubmit = (e)=>{
        e.preventDefault();

        console.log("Title: "+title+
        " Cover: "+cover+ " Author: "+author);
    };
return(
    <div>
        <h2>   This is my Create component </h2>
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label> Add Book Title: </label>
                <input type="text"
                className="form-control"
                value={title}
                onChange={(e) => { setTitle(e.target.value)}}
                />
                </div>
                <div className="form-group">
                <label> Add Book Cover: </label>
                <input type="text"
                className="form-control"
                value={cover}
                onChange={(e) => { setCover(e.target.value)}}
                />
                </div>
                <div className="form-group">
                <label> Add Book Author: </label>
                <input type="text"
                className="form-control"
                value={author}
                onChange={(e) => { setAuthor(e.target.value)}}
                />
                </div>
                <input
                type="submit"
                value="Create Book">

                </input>
                
        </form>
    </div>
)
}

export default Create;