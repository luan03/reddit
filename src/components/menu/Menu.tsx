import * as React from 'react';

const Menu = () => {
    return <div className="menu">

        <nav>
            <ul>
                <li><a href="javascript:void(0);">Popular</a></li>
                <li><a href="javascript:void(0);">All</a></li>
                <li><a href="javascript:void(0);" className="active">Random</a></li>
                <li><a href="javascript:void(0);">Users</a></li>
            </ul>
        </nav>
    </div>
}

export default Menu