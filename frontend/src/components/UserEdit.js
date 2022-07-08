import "../styles/UserEdit.scss";

const UserEdit = () => {
    return (
        <article className="userEdit">
            <div className="userEdit__heading">
                <h1>EDIT USERPROFILE</h1>
            </div>
                <form className="userEdit__form">
                    <h2>Username</h2>
                    <label>
                        <input 
                            className="userEdit__input"
                            type="text"
                            id="name"
                            required
                        />
                    </label>
                    <h2>First name</h2>
                    <label>
                        <input 
                            className="userEdit__input"
                            type="text"
                            id="name"
                            required
                        />
                    </label>
                    <h2>Last name</h2>
                    <label>
                        <input 
                            className="userEdit__input"
                            type="text"
                            id="name"
                            required
                        />
                    </label>
                    <h2>E-Mail</h2>
                    <label>
                        <input 
                            className="userEdit__input"
                            type="email"
                            id="name"
                            required
                        />
                    </label>
                    <h2>Location</h2>
                    <label>
                        <input 
                            className="userEdit__input"
                            type="text"
                            id="name"
                            required
                        />
                    </label>
                    <h2>Phone</h2>
                    <label>
                        <input 
                            className="userEdit__input"
                            type="text"
                            id="name"
                        />
                    </label>
                    <h2>Things I love</h2>
                    <label>
                        <textarea
                            className="userEdit__textarea"
                            type="text"
                            id="name"
                            cols="50"
                            rows="5"
                        ></textarea>
                    </label>
                    <h2>Description</h2>
                    <label>
                        <textarea 
                            className="userEdit__textarea"
                            type="text"
                            id="name"
                            cols="50"
                            rows="5"
                        ></textarea>
                    </label>
                    <input type="submit" value="Save" className="userEdit__submit"></input>
                </form>
                <button>Delete Account</button>
        </article>
    );
};
export default UserEdit;
