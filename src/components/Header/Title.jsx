import './Title.css';

const Title = (props) => {
    return (
        <div className="Title">
            <h1>{props.first}</h1>
            <h1>{props.second}</h1>
        </div>
    )
}

export default Title;