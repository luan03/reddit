import * as React from 'react';
import { connect } from 'react-redux';
import Navigation from '../../components/navigation/Navigation';
import User from '../../components/user/User';

const Sidebar = () => {

    return <header className="header content-width">

        <Navigation />
        <User />

    </header>
}

export default connect()(Sidebar);