import React from 'react';
import './components.css';

export default class Header extends React.Component {
    render(){
        return(
        <header>
            <nav>
                <table class="table">
                    <th class="nav-table-header" >
                        <td id="cell1-nav" className="nav-cell"><a >Home</a></td>
                        <td id="cell2-nav" class="nav-cell"><a>Classes</a></td>
                        <td id="cell3-nav" className="nav-cell"><a>Setup</a></td>
                    </th>
                </table>
            </nav>
        </header>
        )
    }
}