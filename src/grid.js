import React from 'react';
import ReactDOM from 'react-dom';
// import FontAwesome from '../node_modules/font-awesome/css/font-awesome.min.css'
import './index.css';

class Grid extends React.Component {

    constructor(props) {
        super(props);
        this.handleKeyPress = this.handleKeyPress.bind(this);
        document.addEventListener('keydown', function (event) {
            this.handleKeyPress(event);
        }.bind(this));
        this.state = {
            positionMaleIcon: "i0j0",
            positionKeys: ["i0j3", "i2j3", "i1j1", "i3j0"]
        }
    }
    handleKeyPress = (event) => {
        if (event.key == 'ArrowDown') {
          
              alert(this.props.indexOf(this.state));
        }
    };

    render() {
        const tBody = [];

        const maleIcon = <i className="fa fa-male"></i>;
        const keyIcon = <i class="fa fa-key"></i>;
        for (let i = 0; i < 4; i++) {
            const newTr = [];
            for (let j = 0; j < 4; j++) {
                const id = `i${i}j${j}`;

                if (id == this.state.positionMaleIcon) {
                    const newCell = <td id={id} >{maleIcon}</td>
                    newTr.push(newCell);
                }
                else if (this.state.positionKeys.includes(id)) {
                    const newCell = <td id={id}>{keyIcon}</td>
                    newTr.push(newCell);
                }
                else {
                    const newCell = <td id={id}></td>
                    newTr.push(newCell);
                }

            }
            tBody.push(newTr);
        }
        return (

            <div className="gridContainer">

                <table id="table">
                    <tbody>
                        {
                            tBody.map((tr) => {
                                return <tr>
                                    {
                                        tr.map(cell => <td tabindex="1">{cell}</td>)
                                    }
                                </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>
        );
    }
}
export default Grid;