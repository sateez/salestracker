import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';
import LoadingDots from './common/LoadingDots';
// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.
class App extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            activeTab: props.location.pathname
        }
    }
    mapStateToProps(state, ownProps) {
        return {
            loading: state.ajaxCallsInProgress > 0
        };
    }
    render() {
        console.log('AppState:--->', this);
        let path = this.props.location.pathname || '/';
        return (
            <div>
                <nav className="navbar navbar-default">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            <Link className="navbar-brand" to="/">
                                <img alt="AUDI" id="main-logo" className="img-responsive" src="https://www.aspensnowmass.com/~/media/aspensnowmass/partners-sponsors/audiupdated_2016_logobar.ashx?h=128&w=128" />
                            </Link>
                        </div>
                        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                            <ul className="nav navbar-nav">
                                <li className={path === '/' ? 'active' : ''}><IndexLink to="/">Dashboard</IndexLink></li>
                                <li className={path === '/sales-tracker' ? 'active' : ''}><Link to="/sales-tracker">Sales Tracker</Link></li>
                                <li className={path === '/overview' ? 'active' : ''}><Link to="/overview">My Audi</Link></li>
                                <li className={path === '/about' ? 'active' : ''}><Link to="/about">About</Link></li>
                            </ul>
                        </div>
                    </div>
                </nav>

                <div id="content-area">
                    {this.props.loading && <LoadingDots interval={100} dots={20} />}
                    {this.props.children}
                </div>
            </div>
        );
    }
}

App.propTypes = {
    children: PropTypes.object.isRequired
};

export default App;
