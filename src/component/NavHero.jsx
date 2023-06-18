import logo from "../assets/images/logo.svg";
import hero from "../assets/images/illustration-mockups.svg";

function NavHero() {
    return(
        <div className="nav-hero">
            <div className="container py-5">
                <nav className="pb-5">
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="logo mx-auto m-sm-0">
                            <img className="img-fluid" src={logo} alt="logo" />
                        </div>
                        <div>
                            <button
                                className="btn btn-lg shadow rounded-pill bg-white text-black d-none d-sm-block"
                            >
                                Try It Free
                            </button>
                        </div>
                    </div>
                </nav>
                <section className="hero row gx-4">
                    <div className="text-center text-md-start col-md-6">
                        <h1
                            className="display-6 fw-bold"
                        >
                            Build The Community Your Fans Will Love
                        </h1>
                        <p
                            className="lead my-4"
                        >
                            Huddle re-imagines the way we build communities. You have a voice, but so does your audience.
                            Create connections with your users as you engage in genuine discussion.
                        </p>
                        <button
                            className="btn btn-lg text-white shadow rounded-pill"
                        >
                            Get Started For Free
                        </button>
                    </div>
                    <div className="col-md-6 mt-5 mt-md-0">
                        <img className="img-fluid" src={hero} alt="hero" />
                    </div>
                </section>
            </div>
        </div>
    );
}

export default NavHero;
