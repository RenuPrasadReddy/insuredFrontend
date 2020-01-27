import React from 'react';
import { Layout, LayoutLeftItem, LayoutRightItem } from './Styles/Layout';

import  DisplayUserPolicy  from "./DisplayUserPolicy";
import DisplayAggregatedPolicy from './DisplayAggregatedPolicy'
import Search from './Search';

class Homepage extends React.Component {
    constructor() {
        super();
        this.state = {
            userNameSearched: false,
            userPolicyInfo: [],
            aggregatedPoilcySearched: false,
            aggregatedPolicyData: 0
        }
    }

    toDisplay = (userOrPolicy, data) => {
        if (userOrPolicy === 'agent') {
            this.setState({
                aggregatedPoilcySearched: true,
                aggregatedPolicyData: data
            })
        }
        else {
            this.setState({
                userNameSearched: true,
                userPolicyInfo: data
            })
        }
    }
    displayData=(whichSearch)=>{
        if(whichSearch===2){
            return(
                <div>
                    <DisplayAggregatedPolicy aggregatedPolicyData={this.state.aggregatedPolicyData}></DisplayAggregatedPolicy>
                </div>
            )
        }
        else{
            return(
                <div>
                    <DisplayUserPolicy userPolicyInfo={this.state.userPolicyInfo}></DisplayUserPolicy>
                </div>
            )
        }
        
    }
    displayNoData=()=>{
        return(
            <div>
                {/* <DisplayData userPolicyInfo={this.state.userPolicyInfo}></DisplayData> */}
                NO DATA
            </div>
        )
    }

    render() {
        return (
            <Layout >
                <LayoutLeftItem >
                    <Search todisplay={this.toDisplay} />
                </LayoutLeftItem>

                <LayoutRightItem>

                    {this.state.userNameSearched ? this.displayData(1) : ''}
                    {this.state.aggregatedPoilcySearched ? this.displayData(2) : ''}


                </LayoutRightItem>
            </Layout>
        )
    }
}

export default Homepage