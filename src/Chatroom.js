import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';

import Message from './Message.js';

class Chatroom extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            chats: [{
                username: "Kevin Hsu",
                content: <p>Hello World!</p>,
                //img: "http://i.imgur.com/Tj5DGiO.jpg",
            }, {
                username: "Alice Chen",
                content: <p>👋</p>,
                //img: "http://i.imgur.com/Tj5DGiO.jpg",
            }, {
                username: "Kevin Hsu",
                content: <p>Check original source code at: https://github.com/WigoHunter</p>,
                img: "http://i.imgur.com/Tj5DGiO.jpg",
            }, {
                username: "KevHs",
                content: <p>This was created following this tutorial: https://medium.freecodecamp.org/lets-build-a-react-chatroom-component-ed353982d826.</p>,
                //img: "http://i.imgur.com/ARbQZix.jpg",
            }, {
                username: "Kevin Hsu",
                content: <p>Lorem ipsum</p>,
                //img: "http://i.imgur.com/Tj5DGiO.jpg",
            }, {
                username: "Kevin Hsu",
                content: <p>Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>,
                //img: "http://i.imgur.com/Tj5DGiO.jpg",
            }, {
                username: "Kevin Hsu",
                content: <p>YUt enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?</p>,
                //img: "http://i.imgur.com/Tj5DGiO.jpg",
            }, {
                username: "Alice Chen",
                content: <p>Quis autem vel!</p>,
                //img: "http://i.imgur.com/Tj5DGiO.jpg",
            }]
        };

        this.submitMessage = this.submitMessage.bind(this);
    }

    componentDidMount() {
        this.scrollToBot();
    }

    componentDidUpdate() {
        this.scrollToBot();
    }

    scrollToBot() {
        ReactDOM.findDOMNode(this.refs.chats).scrollTop = ReactDOM.findDOMNode(this.refs.chats).scrollHeight;
    }

    submitMessage(e) {
        e.preventDefault();

        this.setState({
            chats: this.state.chats.concat([{
                username: "Kevin Hsu",
                content: <p>{ReactDOM.findDOMNode(this.refs.msg).value}</p>,
                //img: "http://i.imgur.com/Tj5DGiO.jpg",
            }])
        }, () => {
            ReactDOM.findDOMNode(this.refs.msg).value = "";
        });
    }

    render() {
        const username = "Kevin Hsu";
        const { chats } = this.state;

        return (
            <div className="chatroom">
                <h3>React Chat</h3>
                <ul className="chats" ref="chats">
                    {
                        chats.map((chat) => 
                            <Message chat={chat} user={username} />
                        )
                    }
                </ul>
                <form className="input" onSubmit={(e) => this.submitMessage(e)}>
                    <input type="text" ref="msg" />
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}

export default Chatroom;

