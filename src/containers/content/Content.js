import * as React from 'react';
import { connect } from 'react-redux';
import { decrementCounter, fetchItems, incrementCounter } from '../../actions';
import Posts from '../../components/posts/Posts';

// Transform redux state into props to my Presentional components
const mapStateToProps = (state) => {
    return {
        votes: state.votes,
        items: state.posts.items
    }
}

// Dispatch actions to my Presentional Components
const mapDispatchToProps = (dispatch) => {
    return {
        up: () => {
            dispatch(incrementCounter())
        },
        down: () => {
            dispatch(decrementCounter())
        },
        requestData: () => {
            dispatch(fetchItems())
        }
    }
}

const Content = (props) => {

    return <section className="content content-width">
                <div className="wrapper">
                    <Posts data={props} />
                </div>
            </section>
}

export default connect(
    mapStateToProps,
    mapDispatchToProps)(Content);