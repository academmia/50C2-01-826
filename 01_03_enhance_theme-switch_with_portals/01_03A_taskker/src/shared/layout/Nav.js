import React from 'react';
import { NavLink } from 'react-router-dom';
import { SettingsContext } from '../../app/settings-context';

const Nav = () => {
    return (
        <SettingsContext.Consumer>
            {   ({settings}) => (
                <div className="header d-lg-flex p-0 collapse">
                    <div className="container">
                        <div className="row row align-items-center">
                            <div className="col-lg-3 ml-auto"></div>
                            <div className="col col-lg order-lg-first">
                                <ul className="nav nav-tabs border-0 flex-column flex-lg-row">
                                    <li className="nav-item">
                                        <NavLink to="/" exact activeClassName="active" aria-current="page" className="nav-link">
                                            <i className="fe fe-home"></i> Home</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink to="/profile" activeClassName="active" className="nav-link">
                                            <i className="fe fe-file"></i> Profile</NavLink>
                                    </li>
                                {   settings.profileData && settings.profileData.isAdmin &&
                                    <li className="nav-item">
                                        <NavLink to="/app-settings" activeClassName="active" className="nav-link">
                                            <i className="fe fe-settings"></i> App Settings</NavLink>
                                    </li>
                                }
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            )

            }
        </SettingsContext.Consumer>
    )
}

export default Nav;
