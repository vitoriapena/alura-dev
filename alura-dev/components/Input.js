function Input(props) {

    const {inputPlaceholder} = props;

    return (
        <input 
            type="text" 
            placeholder={inputPlaceholder}
            className="w-full bg-white bg-opacity-25 rounded p-2 mb-3 dark:text-white"
        />
    )
}

export default Input
