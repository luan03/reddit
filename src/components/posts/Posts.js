import * as React from 'react';
import Counter from '../../components/counter/Counter';


class Posts extends React.Component {

    componentDidMount () {
        this.props.data.requestData()
    }

    render() {

        let items = this.props.data.items

        return <ul className="posts">

                {items.map(
                    (item,i) => <li className="post" key={i}>

                            <Counter votes={item.score} up={this.props.data.up} down={this.props.data.down} />

                            <span className="thumb fas fa-images" />
                            <div className="description">
                                <b>{item.title}</b>
                                <span className="submission">submitted 5 hours ago by {item.author} to {item.subreddit_name_prefixed}</span>

                                <ul className="post-actions">
                                    <li>{item.num_comments} comments</li>
                                    <li>share</li>
                                    <li>save</li>
                                    <li>hide</li>
                                    <li>report</li>
                                </ul>
                            </div>
                    </li>
                )}

                {/* <li className="post">

                    <Counter votes={this.props.data.votes} up={this.props.data.up} down={this.props.data.down} />

                    <span className="thumb fas fa-images" />
                    <div className="description">
                        <b>Questions about living in Australia</b>
                        <span className="submission">submitted 5 hours ago by luan03 to r/memes</span>

                        <ul className="post-actions">
                            <li>283 comments</li>
                            <li>share</li>
                            <li>save</li>
                            <li>hide</li>
                            <li>report</li>
                        </ul>
                    </div>
                </li> */}


            </ul>
    }
}

export default Posts