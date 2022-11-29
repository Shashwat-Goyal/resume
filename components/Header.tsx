export const Header = ({ socialConnections, profile, assets }: any) => {
    
    return (
        <header id="header">
            <div className="d-flex flex-column">

            <div className="profile">
                <img src={assets.fields.avatar.fields.file.url} alt="" className="img-fluid rounded-circle" />
                <h1 className="text-light"><a href="index.html">{profile.fields.firstName} {profile.fields.lastName}</a></h1>
                <div className="social-links mt-3 text-center">
                    {
                        socialConnections.map((socialConnection: any) => {
                            const { url, title, icon } = socialConnection.fields;
                            return (
                                <a key={socialConnection.sys.id} href={url} title={title} className="medium" target="_blank" rel="noreferrer"><i className={`bx bxl-${icon}`}></i></a>
                            )
                        })
                    }
                </div>
            </div>

            <nav id="navbar" className="nav-menu navbar">
                <ul>
                <li><a href="#hero" className="nav-link scrollto"><i className="bx bx-home"></i> <span>Home</span></a></li>
                <li><a href="#about" className="nav-link scrollto"><i className="bx bx-user"></i> <span>About</span></a></li>
                <li><a href="#resume" className="nav-link scrollto"><i className="bx bx-file-blank"></i> <span>Resume</span></a></li>
                <li><a href="#portfolio" className="nav-link scrollto"><i className="bx bx-book-content"></i> <span>Portfolio</span></a></li>
                {/* <li><a href="#services" className="nav-link scrollto"><i className="bx bx-server"></i> <span>Services</span></a></li> */}
                <li><a href="#contact" className="nav-link scrollto"><i className="bx bx-envelope"></i> <span>Contact</span></a></li>
                </ul>
            </nav>
            </div>
        </header>
    )
}