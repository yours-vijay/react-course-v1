const Header =()=> {
    return <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">BrandName</a>
          <ul className="navbar-nav flex-row gap-3">
              <li className="nav-item">
                <a className="nav-link" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Link</a>
              </li>
            </ul>
        </div>
      </nav>
    }

export default Header;