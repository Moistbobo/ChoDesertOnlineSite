import React, {Component} from 'react';
import './MessageBox.css';

class MessageBox extends Component {
    constructor(props) {
        super(props);

        this.state = {
            text: '',
            name: '',
            showButton: true
        }
    }

    textChangedHandler = (e) => {
        this.setState({
            text: e.target.value
        })
    };

    usernameChangedHandler = (e) => {
        this.setState({
            name: e.target.value
        })
    };

    sendMessageHandler = (e) => {
        console.log('You pressed me!');

        console.log(this.state.name, this.state.text);

        const postURL = 'https://discordapp.com/api/webhooks/602355411437486080/GAZKRa736bmWu62efikvs43KG4VHM52ReFufgLBht5FWTwWzq8cbfEC20n8uscXDxO38';
        const requestSettings = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: JSON.stringify({
                content: this.state.text,
                username: this.state.name
            }),
            muteHttpExceptions: true
        };



        fetch(postURL, requestSettings)
            .then((res) => {
                if (res.ok) {
                    this.setState({
                        showButton: false
                    });
                } else {
                    this.setState({
                        showButton: true
                    });
                }
            })
            .catch((err) => {
                console.log(err.toString());
            })
    };

    render() {
        const messageBoxContents = this.state.showButton ?
            (
                <div
                    className={'MessageForm'}>
                    <div
                        className={'InputGroup'}>
                        <input
                            placeholder={'Name'}
                            type={'text'}
                            value={this.state.name}
                            onChange={this.usernameChangedHandler}/>

                        <textarea
                            style={{
                                resize: 'vertical'
                            }}
                            maxLength={1024}
                            placeholder={'Enter a message here'}
                            value={this.state.text}
                            onChange={this.textChangedHandler}/>
                    </div>


                    <button
                        style={{
                            width: '75px',
                            height: '50px',
                            opacity: (this.state.name.length < 2 || this.state.text.length === 0) ? 0.5 : 1.0
                        }}
                        type={'submit'}
                        onClick={this.sendMessageHandler}
                        disabled={this.state.name.length < 2 || this.state.text.length === 0}
                    >
                        Submit
                    </button>
                </div>
            ) :
            <p>Message sent!</p>;

        return (
            <div
                className={'MessageBoxContainer'}>
                <h1>Send a message</h1>
                {messageBoxContents}
            </div>
        )
    }
};


export default MessageBox;
