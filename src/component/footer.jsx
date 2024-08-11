const Footer = (props) => {
    return (
        <footer className="footer bg-light py-3">
        <div className="container-fluid">
          <div className="row align-items-center justify-content-between">
            <span className="me-2"><img src={props.logo}/> Powered by React & Bootstrap</span>
            <small>
              <a href="#" target="_blank" rel="noopener noreferrer">
                Learn more
              </a>
            </small>
          </div>
        </div>
      </footer>
    )
}

export default Footer;