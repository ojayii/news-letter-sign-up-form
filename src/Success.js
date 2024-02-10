import "./Success.css";

const Success = ({reload}) => {
    return (
        <div className="success-app">
            <main className="success-main">
                <img src="images/icon-list.svg" alt="ticked-icon" />
                <h1>Thanks for subscribing!</h1>
                <p>A confirmation email has been sent to <span>ash@loremcompany.com</span>.
                    Please open it and click the button inside to confirm your subscription.</p>
                <input onClick={reload} type="button" value="Dismiss message" />
            </main>
            <footer className="attribution">
                Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
                Coded by <a href="#">Ojay</a>.
            </footer>
        </div>
    )
}

export default Success;