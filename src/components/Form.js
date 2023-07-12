import Button from "./Button"

function Forms() {
    return(
        <form >
                <input type="text" placeholder="Name"/> <br/> 
                <input type="text" placeholder="Phone Number"/> <br/>
             <input type="email" placeholder="Email"/> <br/>
                <input type="text" placeholder="Message"/> <br/>
                <Button title="Send"/>
            </form>
    )
}

export default Forms;