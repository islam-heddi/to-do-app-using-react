import React, {useState} from 'react'

function Todo(){
    const [todo ,setTodo] = useState([])

    const [text ,setText] = useState("")

    const [isModifying,setIsModifying] = useState(false)

    const [indexModify,setIndexModify] = useState()

    const HandleAddTodo = () => {
        setTodo([...todo,text])
        setText("")
    }

    const HandleText = (e) => {
        setText(e.target.value)
    }
    
    const HandleRemove = (index) => {
        console.log("You clicked the delete button")
        let newTodo = todo.filter((_,i) => i != index)
        setTodo(newTodo)
    }
 
    const HandleModifyLabel = (index) => {
        setIsModifying(true)
        setIndexModify(index)
        setText(todo.filter((_,i) => i == index))
    }

    const HandleModifyTodo = (e) => {
        let newtodo = todo.map((element,i) => { 
            if(i == indexModify) {
                return text
            }else{
                return element
            }
        })
        setText("")
        setIsModifying(false)
        setTodo(newtodo)
    }

    const HandleCancelMTodo = () => {
        setText("")
        setIsModifying(false)
    }

    const addContent = <div>
        <input type="text" value={text} onChange={HandleText} placeholder="enter your to do"/>
        <button onClick={HandleAddTodo}>Add</button>
    </div>

    const modifyContent = <div>
        <input type="text" value={text} onChange={HandleText} placeholder="modify your to do"/>
        <button onClick={HandleModifyTodo}>Modify</button>
        <button className='cancel' onClick={HandleCancelMTodo}>Cancel</button>
    </div>
    return(<>
            {!isModifying ? addContent : modifyContent}
            <div>
                <ul>
                    {todo.map((item, index) => <>
                                <li key={index}>{item}</li>
                                <button onClick={() => HandleRemove(index)}>Delete</button>
                                <button onClick={() => HandleModifyLabel(index)}>Modify</button>
                                </>)}
                </ul>
            </div>
        </>
    )
}

export default Todo