function CardMain(props) {
    return(
        <section className="mb-4 p-4 shadow rounded">
            <div className="row justify-content-center align-items-center">
                <div className="col-md-6 text-center text-sm-start">
                    <h2 className="fs-2 fw-bold text-black">{props.title}</h2>
                    <p className="lead">{props.paragraph}</p>
                </div>
                <div className="col-md-6">
                    <img className="img-fluid" src={props.image} alt="illustration" />
                </div>
            </div>
        </section>
    );
}

export default CardMain;
