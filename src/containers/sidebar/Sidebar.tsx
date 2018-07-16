import * as React from 'react';
import { connect } from 'react-redux';
import { selectItem } from '../../actions';
import Links from '../../components/links/Links';
import Menu from '../../components/menu/Menu';
import Search from '../../components/search/Search';

// Transform redux state into props to my Presentional components
const mapStateToProps = (state: any) => {
    return {
        selected: state.links.selected
    }
}

// Dispatch actions to my Presentional Components
const mapDispatchToProps = (dispatch: any) => {
    return {
        updateSelect: () => {
            dispatch(selectItem(436))
        }
    }
}

const Sidebar = (props: any) => {

    return <section className="sidebar">

        <div className="hide">
            <a href="javascript:void(0)" onClick={props.updateSelect}>update number</a>
            <br />
            <b>number: {props.selected}</b>
        </div>

        <Search />
        <Menu />
        <Links />

    </section>
}

export default connect(
    mapStateToProps,
    mapDispatchToProps)(Sidebar);