const Contact = () => {
    return(
        <div className="ContactUs">
            <form> 
                <input type="text" className="name" placeholder="Name"/>
                <input type="text"className="mess" placeholder="Message"/>
                <button>submit</button>
            </form>
            
        </div>
    )
}
export default Contact;