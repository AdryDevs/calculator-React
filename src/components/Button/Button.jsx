import './Button.css'

const Button = ({
    content, 
    type = 'number', 
    shape = 'square',
    clickHandler = ({content, type, shape}) => { },
}) => {
    return (<div 
        className={`${type} ${shape}`} 
        onClick={() => clickHandler({content, type, shape})}>{content}
    </div>)
}

export default Button;