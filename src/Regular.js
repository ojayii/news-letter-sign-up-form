import "./Regular.css"

const Regular = ({ formData, setFormData, onSubmit, finalData, setFinalData, errorMsg }) => {

    // console.log(formData)

    const handleSubmit = (e) => {
        e.preventDefault();
        formData && setFinalData(formData);
        formData && onSubmit();
    };

    return (
        <div className="App">
            <main className="regular-main">
                <figure className="illustration">
                    <img src="images/illustration-sign-up-mobile.svg" alt="" />
                    <img src="images/illustration-sign-up-desktop.svg" alt="" />
                </figure>
                <section className="main-content">
                    <h1>Stay updated!</h1>
                    <p>Join 60,000+ product managers receiving monthly updates on:</p>
                    <div className="specs">
                        <img src="images/icon-list.svg" alt="tick-icon" />
                        <p>Product discovery and building what matters</p>
                    </div>
                    <div className="specs">
                        <img src="images/icon-list.svg" alt="tick-icon" />
                        <p>Measuring to ensure updates are a success</p>
                    </div>
                    <div className="specs">
                        <img src="images/icon-list.svg" alt="tick-icon" />
                        <p>And much more!</p>
                    </div>
                    <form onSubmit={handleSubmit} noValidate>
                        <label htmlFor="email">Email adress</label>
                        <input
                            type="email"
                            placeholder="email@company.com"
                            value={formData.someField}
                            onInput={(e) => setFormData(e.target.value)}
                        />
                        <input type="submit" value="Subscribe to monthly newsletter" />
                        {errorMsg}
                    </form>
                </section>
            </main>
            <footer className="attribution">
                Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
                Coded by <a href="#">Ojay</a>.
            </footer>
        </div>
    );
}

export default Regular;