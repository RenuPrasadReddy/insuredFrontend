import React from "react";
import axios from 'axios';
import DateTimePicker from 'react-datetime-picker'

class Search extends React.Component {
    constructor() {
        super();
        this.state = {
            username: '',
            agent: '',
            policyInfo: [],
            aggregatedPolicy: 0,
            selectedFile: null,
            dateAndTime: new Date(),
            message: ''
        }
    }

    handleUsernameSearch = () => {
        console.log("username:", this.state.username);

        axios.get(`http://localhost:5001/search/username/${this.state.username}`)
            .then(response => {
                console.log('response:', response);
                this.setState({
                    policyInfo: response.data[0]
                }, () => {
                    console.log("policyInfo:", this.state.policyInfo);
                    this.props.todisplay('username', this.state.policyInfo)

                })
            })
    }

    handleAgentSearch = () => {
        console.log("agent:", this.state.agent);
        axios.get(`http://localhost:5001/search/agent/${this.state.agent}`)
            .then(response => {
                console.log('response:', response);

                this.setState({
                    aggregatedPolicy: response.data
                }, () => {
                    console.log("aggregated policy:", this.state.aggregatedPolicy);
                    this.props.todisplay('agent', this.state.aggregatedPolicy)
                });
            })
    }

    handleFileUplaod = () => {
        console.log('file:', this.state.selectedFile);
        const data = new FormData()
        data.append('file', this.state.selectedFile)
        axios.post("http://localhost:5001/upload", data, {

        }).then(res => console.log("res:", res));
    }

    handleDateChange = date => this.setState({ dateAndTime: date })

    handleMessage = e => this.setState({ message: e.target.value })

    saveMessage = () =>{
        console.log("message and time", this.state.message, this.state.dateAndTime);
         let message = this.state.message;
         let dateAndTime = this.state.dateAndTime
         console.log("message:", dateAndTime)
        // message.set('messageToSave', this.state.message);
        // console.log("message:",message)
        axios.post("http://localhost:5001/saveMessage",{
            message,
            dateAndTime
        }).then(res => console.log("res:", res));
    }

    render() {
        return (
            <div>
                <div className='box'>
                    <label>Upload file: </label>

                    <input
                        type='file'
                        name='file'
                        onChange={(e) => this.setState({ selectedFile: e.target.files[0] })} />

                    <button onClick={() => this.handleFileUplaod()}>Save</button>
                </div>
                <div className="box">
                    <label>Find policy info using name: </label>
                    <input
                        type='text'
                        name='username'
                        value={this.state.username}
                        style={{ marginRight: '5px' }}
                        onChange={(e) => this.setState({ username: e.target.value })} />

                    <button onClick={() => this.handleUsernameSearch()}>Search</button>
                </div>

                <div className="box">
                    <label>Find provide aggregated policy by each user: </label>

                    <input
                        type='text'
                        name='agent'
                        value={this.state.agent}
                        style={{ marginRight: '5px' }}
                        onChange={(e) => this.setState({ agent: e.target.value })} />

                    <span><button onClick={() => this.handleAgentSearch()}>Search</button></span>
                </div>

                <div className="box">
                    <label>Enter message: </label>
                    <span><input style={{ marginBottom: '5px' }} type="text" value={this.state.message} onChange={(e) => this.handleMessage(e)} /></span>
                    <div>
                        <label>Select Date and Time: </label>
                        <DateTimePicker onChange={this.handleDateChange} value={this.state.dateAndTime} />
                        
                    </div>
                    <button style={{marginTop: "5px"}} onClick={this.saveMessage}>Save</button>

                </div>

            </div>

        )
    }
}

export default Search;