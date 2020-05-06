import React, {useRef} from "react";

interface TodoFormProps {
    onAdd(title: string): void
}
export const TodoForm: React.FC<TodoFormProps> = props => {
    // const [title, setTitle] = useState<string>('')
    const ref = useRef<HTMLInputElement>(null)
    // const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     console.log(event.target.value)
    //     setTitle(event.target.value)
    // }
    const keyPressHandler = (event: React.KeyboardEvent) => {
        if ( event.key === 'Enter') {
            props.onAdd(ref.current!.value)
            ref.current!.value = ''
            // console.log(title)
            // setTitle('')
        }
    }
    return (
        <div className="input-field mt2">
            <input
                ref={ref}
                // value={title}
                //    onChange={onChangeHandler}
                   onKeyPress={keyPressHandler} type="text" id="title"/>
            <label htmlFor="title" className="active">Input text</label>
        </div>
    )
}

