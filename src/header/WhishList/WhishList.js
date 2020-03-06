import React,{Component} from 'react';


class WishList extends Component{
    state = {
        Liked:1,
    }
    render() {
    return (
        <a href="/"><span className="icon2"></span>Wish List({this.state.Liked})</a>
)
}
}
export default WishList