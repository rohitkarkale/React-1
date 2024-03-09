
function AddUser(props) {

    const addUser = (e) => {
        e.preventDefault()

        const data = e.target.elements.uname.value
         props.au(data)
    }
        return (
            <div>
                <form onSubmit={
                    addUser
                }>
                    <input type='text' name='uname' placeholder='Enter Name' required/>
                    <button>adduser</button>
                    <p></p>
                </form>

                
            </div>

        )
    }

    export default AddUser
