const API = 'https://frontend-test-assignment-api.abz.agency/api/v1/';


const API_CURRENT = 'https://frontend-test-assignment-api.abz.agency/api/v1/';
class Component extends React.Component {
    render() {
        return (
            <div></div>
        )
    }
}
class Menu extends React.Component {
    render() {
        return (
            <ul>
                <li><a href='#about'>About me</a></li>
                <li><a href='#relationships'>Relationships</a></li>
                <li><a href='#requirements'>Requirements</a></li>
                <li><a href='#users'>Users</a></li>
                <li><a href='#sign'>Sign Up</a></li>
            </ul>
        )
    }
}
class Header extends React.Component {
    constructor() {
        super();
        this.state = {
          
        }

    }
    componentWillMount() {
        fetch(API + 'users/1')
          .then(response => response.json())
          .then(data => this.setState({ data }));
    }
    render() {
        return (
            <div className="header">
                <div className="container">
                    <img className='logo' src='img/logo.svg'/>
                    <div className='header-wrapper'>
                    <div className='header-wrapper-bg'></div>
                        <Menu />
                        <div className="header-user">
                            {
                                this.state.data ? (
                                    <div className='header-user-text'>
                                        <h3>{this.state.data.user.name}</h3>
                                        <p>{this.state.data.user.email}</p>
                                    </div>
                                ) : (
                                    null
                                )
                            }
                            {
                                this.state.data ? (
                                    <div className='header-user-img'>
                                        <img src={this.state.data.user.photo} />
                                    </div>
                                ) : (
                                    null
                                )
                            }
                            <button><img src="img/sign-out.svg" /><img src="img/sign-out-hov.svg" /></button>
                        </div>
                    </div>
                    <button className='header-button-hidden'><img src='img/line-menu.png' /></button>
                </div>
            </div>
        )
    }
}
class Main extends React.Component {
    render() {
        return (
            <div id='about' className='main'>
                <div className='container'>
                    <div className='main-container'>
                        <h1>Test assignment for Frontend Developer position</h1>
                        <p>We kindly remind you that your test assignment should be submitted as a link to github/bitbucket repository. Please be patient, we consider and respond to every application that meets minimum requirements. We look forward to your submission. Good luck!</p>
                        <button className='button'><a href='#sign'>Sign Up</a></button>
                    </div>
                </div>
            </div>
        )
    }
}
class InfoBlock extends React.Component {
    render() {
        return (
            <div className='info-block'>
                <img src={this.props.src}/>
                <div>
                    <h3>{this.props.title}</h3>
                    <p>{this.props.text}</p>
                </div>
            </div>
        )
    }
}
class Info extends React.Component {
    render() {
        return (
            <div id='relationships' className='info'>
                <div className='container'>
                    <h2>Let's get ac quainted</h2>
                    <div className='info-block-main'>
                        <h3>I am cool frontend developer</h3>
                        <p>When real users have a slow experience on mobile, they're much less likely to find what they are looking for or purchase from you in the future. For many sites this equates to a huge missed opportunity, especially when more than half of visits are abandoned if a mobile page takes over 3 seconds to load.</p>
                        <p>Last week, Google Search and Ads teams announced two new speed initiatives to help improve user-experience on the web.</p>
                        <button><a href='#sign'>Sign Up</a></button>
                    </div>
                    <h2>About my relationships with web-development</h2>
                    <div className='info-blocks'>
                        <InfoBlock src='img/html.png' title="I'm in love with HTML" text='Hypertext Markup Language (HTML) is the standard markup language for creating web pages and web applications.'/>
                        <InfoBlock src='img/css.png' title="CSS is my best friend" text='Cascading Style Sheets (CSS) is a  style sheet language used for describing the presentation of a document written in a markup language like HTML.'/>
                        <InfoBlock src='img/js.png' title="JavaScript is my passion" text='JavaScript is a high-level, interpreted programming language. It is a language which is also characterized as dynamic, weakly typed, prototype-based and multi-paradigm.'/>
                    </div>
                </div>
            </div>
        )
    }
}
class Requirements extends React.Component {
    render() {
        return (
            <div id='requirements' className='requirements'>
                <div className='container'>
                    <h2>General requirements for the test task</h2>
                    <div className='requirements-container'>
                        <div>
                            <p>Users want to find answers to their questions quickly and data shows that people really care about how quickly their pages load. The Search team announced speed would be a ranking signal for desktop searches in 2010 and as of this month (July 2018), page speed will be a ranking factor for mobile searches too.</p>
                            <p>If you're a developer working on a site, now is a good time to evaluate your performance using our speed tools. Think about how performance affects the user experience of your pages and consider measuring a variety of real-world user-centric performance metrics.</p>
                            <p>Are you shipping too much JavaScript? Too many images? Images and JavaScript are the most significant contributors to the page weight that affect page load time based on data from HTTP Archive and the Chrome User Experience Report - our public dataset for key UX metrics as experienced by Chrome users under real-world conditions.</p>
                        </div>
                        <img src='img/man-2.png'/>
                    </div>
                </div>
            </div>
        )
    }
}
class User extends React.Component {
    render() {
        return (
            <div className='user'>
            <div className='user-img'><img src={this.props.src}/></div>
                <div className='user-wrapper'>
                    <h4>{this.props.title}</h4>
                    <p>{this.props.job}</p>
                    <p>{this.props.mail}</p>
                    <p>{this.props.phone}</p>
                </div>
            </div>
        )
    }
}
class Users extends React.Component {
    constructor() {
        super();
        this.state = {
            isButtonShowed: true,
            showedUsers: 6,
        }
        this.showMoreUsers = this.showMoreUsers.bind(this);
    }
    componentWillMount() {
        fetch(API + 'users?page=1&count=' + this.state.showedUsers)
          .then(response => response.json())
          .then(data => this.setState({ data }));
    }
    componentWillUpdate() {
            fetch(API + 'users?page=1&count=' + this.state.showedUsers)
            .then(response => response.json())
            .then(data => this.setState({ data }))    
    }
    showMoreUsers() {
            this.setState({
                showedUsers: this.state.showedUsers += 6,
            })

        this.state.showedUsers >= this.state.data.total_users ? (
            this.setState({
                isButtonShowed: !this.state.isButtonShowed,
            })
        ) : (
            null
        )
    }
    render() {
        return (
            <div id='users' className='users'>
                <div className='container'>
                    <h2>Our cheerful users</h2>
                    <h3>Attention! Sorting users by registration date</h3>
                    <div className='users-container'>
                        {
                            this.state.data ? (
                                this.state.data.users.map((e, i) => (
                                <User
                                        key={e.id}
                                        title={e.name}
                                        job={e.position}
                                        phone={e.phone}
                                        mail = {e.email}
                                        src={e.photo}
                                    />
                                    ))
                            ) : (
                                null
                            )
                        }
                    </div>
                    {
                        this.state.isButtonShowed ? (
                            <button onClick={this.showMoreUsers} className='button button-fill'>Show more</button>
                        ) : (
                            null
                        )
                    }
                </div>
            </div>
        )
    }
}
class Register extends React.Component {
    constructor() {
        super();
        this.state = {
           
        }
	}
    componentWillMount() {
        fetch(API + 'positions')
          .then(response => response.json())
          .then(data => this.setState({ data }));
    }
    render() {
        return (
            <div id='sign' className='register'>
                <div className='container'>
                    <h2>Register to get a work</h2>
                    <h3>Attention! After successful registration and alert, update the list of users in the block from the top</h3>
                    <form id='form' method='POST' action=''>
                        <div className='register-form'>
                            <div className='input-text'>
                                <label for='reg-name'>Name</label>
                                <input required minlength="2" maxlength="60" type='text' id='reg-name' placeholder='Your name' />
                            </div>
                            <div className='input-text'>
                                <label for='reg-email'>Email</label>
                                <input required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" type='email' id='reg-email' placeholder='Your email' />
                            </div>
                            <div className='input-text' onChange={this.isValid}>
                                <label for='reg-phone'>Phone</label>
                                <input required pattern="[\+]\d{3}\d{2}\d{3}\d{2}\d{2}" minlength="13" maxlength="13" type='tel' id='reg-phone' placeholder='+38 (___)  ___ __ __' />
                            </div>
                        </div>
                        <div className='register-form'>
                            {
                                this.state.data ? (
                                    <select required id='reg-position' className='select'>
                                        <option value="" disabled selected>Select your position</option>
                                       {
                                            this.state.data.positions.map((e, i) => (
                                                <option id={i} value={e.name}>{e.name}</option>
                                            ))
                                       }
                                    </select>
                                ) : (
                                    null
                                )
                            }
                            <div className='input-file'>
                                <label className='input-file-wrapper' for='reg-photo'>
                                    <input required type='file' id='reg-photo' />
                                    <div className='button button-fill'>Upload</div>
                                    <input type="text" id="filename" class="filename" placeholder="No file selected" disabled />
                                    <p>File format jpg  up to 5 MB, the minimum size of 70x70px</p>
                                </label>
                            </div>
                        </div>
                        <input class='button' type='submit' value='Sign Up' />
                    </form>
                </div>
            </div>
        )
    }
}
class Footer extends React.Component {
    render() {
        return (
            <div className='footer'>
                <div className='container'>
                    <div className='footer-up'>
                        <img className='logo' src='img/logo-white.svg' />
                        <Menu />
                    </div>
                    <div className='footer-bot'>
                        <div>
                            <p className='mail'>work.of.future@gmail.com</p>
                            <p className='phone'>+38 (050) 789 24 98 </p>
                            <p className='tel'>+38 (095) 556 08 45</p>
                        </div>
                        <div className='footer-bot-right'>
                            <ul>
                                <li><a href='#'>News</a></li>
                                <li><a href='#'>Blog</a></li>
                                <li><a href='#'>Partners</a></li>
                                <li><a href='#'>Shop</a></li>
                            </ul>
                            <ul>
                                <li><a href='#'>Overview</a></li>
                                <li><a href='#'>Design</a></li>
                                <li><a href='#'>Code</a></li>
                                <li><a href='#'>Collaborate</a></li>
                            </ul>
                            <ul>
                                <li><a href='#'>Tutorials</a></li>
                                <li><a href='#'>Resources</a></li>
                                <li><a href='#'>Guides</a></li>
                                <li><a href='#'>Examples</a></li>
                            </ul>
                            <ul>
                                <li><a href='#'>FAQ</a></li>
                                <li><a href='#'>Terms</a></li>
                                <li><a href='#'>Conditions</a></li>
                                <li><a href='#'>Help</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className='footer-foot'>
                        <p>© abz.agency specially for the test task</p>
                        <div className='social-icons'>
                            <a href='#'><img src='img/fb.svg' /></a>
                            <a href='#'><img src='img/in.svg' /></a>
                            <a href='#'><img src='img/inst.svg' /></a>
                            <a href='#'><img src='img/tw.svg' /></a>
                            <a href='#'><img src='img/pint.svg' /></a>
                        </div>
                    </div>
                </div> 
            </div>
        )
    }
}
class App extends React.Component {

	render () {
		return (
			<div>
                <Header />
                <Main />
                <Info />
                <Requirements />
                <Users />
                <Register />
                <Footer />
            </div>
		)
	}
}
ReactDOM.render(
	<App />,
	document.getElementById('root')
);
