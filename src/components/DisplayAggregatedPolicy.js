import React from 'react';

// export default class DisplayAggregatedpolicy extends React.Component {
//     constructor(props) {
//         super();

//     }
//     render() {
//             return (
//                 <div>
//                     Aggregated Policy: {this.props.aggregatedPolicyData}
//                 </div>
            
//             )
//         }
//     }

    export default function DisplayAggregatedpolicy(props){
        return (
            <div className="box">
                Aggregated Policy: {props.aggregatedPolicyData}
            </div>
        
        )
    }
        