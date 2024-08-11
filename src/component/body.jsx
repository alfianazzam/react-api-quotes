const Body = (props) => {
    return (
         <main role="main" className="container p-0 mt-3">
        <section className="row align-items-center justify-content-around">
          <div className="col-lg-6 mb-2 text-center">
            <h1 className="display-4 fw-bold text-primary">Quote of the Day</h1>
            <p className="lead text-muted">{props.article.title}</p>
            <div className="d-flex justify-content-center">
              <button onClick={props.prevQuote} className="btn btn-secondary me-2">
                Prev
              </button>
              <button onClick={props.nextQuote} className="btn btn-primary">
                Next
              </button>
            </div>
          </div>

          <div className="col-lg-6 mb-2">
            <p className="lead text-muted">Tags: {props.article.tags?.join(", ")}</p>
            <p className="lead text-muted">Body:</p>
            <p>{props.article.body}</p>
          </div>
        </section>
      </main>
    )
}

export default Body;
