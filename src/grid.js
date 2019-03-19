import React from 'react';
import ReactDOM from 'react-dom';
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
        const pos = this.state.positionMaleIcon;
        let y = parseInt(pos.split('j')[1]);
        let x = parseInt(pos.split('j')[0].split('i')[1]);
        switch (event.key) {
            case "ArrowDown":
                if (x < 3) {
                    x = x + 1;
                }
                break;
            case "ArrowUp":
                if (x > 0) {
                    x = x - 1;
                }
                break;
            case "ArrowLeft":
                if (y > 0) {
                    y = y - 1;
                }
                break;
            case "ArrowRight":
                if (y < 3) {
                    y = y + 1;
                }
                break;
        }
        let id = `i${x}j${y}`;
        this.setState({ positionMaleIcon: id });
        let index = this.state.positionKeys.indexOf(id);

        if (index != -1) {
            this.state.positionKeys.splice(index, 1);
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
                                        tr
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