import React from 'react';

export default class DisplayUserPolicy extends React.Component {
    constructor(props) {
        super();

    }
    render() {
        console.log("DisplayUserPolicy", this.props.userPolicyInfo);
        return (
            <div className="box">
                <h2>User Policy Info</h2>
                <div>id: {this.props.userPolicyInfo._id}</div>
                <div> policy_mode: {this.props.userPolicyInfo.policy_mode}</div>
                <div> policy_start_date: {this.props.userPolicyInfo.policy_start_date}</div>
                <div> companyId: {this.props.userPolicyInfo.companyId}</div>
                <div> policy_end_date: {this.props.userPolicyInfo.policy_end_date} </div>
                <div>  userId: {this.props.userPolicyInfo.userId}</div>
            </div>
        )
    }
}
