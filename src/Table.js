import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Table extends React.Component() {
    // constructor(props) {
    //     super(props);
    //     const col = 4;
    //     const current, next;
    //     var table = document.getElementsByClassName("mstrTable");
    //     var tbody = table.getElementsByTagName("tbody")[0];
    //     var ishigh;

    // }
    
  ArrowKeyLeft= () =>{

 }

    handleKeyPress = e => {

        var code = e.keyCode;
        switch (code) {
            case 37:
                ArrowKeyLeft();
                break; 		//left

            case 38:
                ArrowKeyUp();
                break; 		//up

            case 39:
                ArrowKeyRight();
                break; 	//right

            case 40: ArrowKeyDown();
                break;
        }

    };




    render() {
        return (
            <div className="gridContainer">
                {/* <div>
           <input type="text" id="one" onKeyDown={this.handleKeyPress} />
        </div> */}


                <table className="mastrTable">
                    <tbody>
                        <tr>
                            <td onKeyDown={this.handleKeyPress} tabindex="1"><i className="fa fa-male"></i></td>
                            <td tabindex="2"></td>
                            <td tabindex="3"><i class="fa fa-key"></i></td>
                            <td tabindex="4"></td>
                        </tr>
                        <tr>
                            <td tabindex="5"></td>
                            <td tabindex="6"><i class="fa fa-key"></i></td>
                            <td tabindex="7"></td>
                            <td tabindex="8"></td>
                        </tr>
                        <tr>
                            <td tabindex="9"></td>
                            <td tabindex="10"></td>
                            <td tabindex="11"></td>
                            <td tabindex="12"><i class="fa fa-key"></i></td>
                        </tr>
                        <tr>
                            <td tabindex="13"><i class="fa fa-key"></i></td>
                            <td tabindex="14"></td>
                            <td tabindex="15"></td>
                            <td tabindex="16"></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}
export default Table; 