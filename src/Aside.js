import React, { Component } from 'react';
/* import graceHooper from './graceHopper.jpg'; */
import './index.css';

class Aside extends Component {
  render() {
    return (
        <table className="summary-table">
          {/*crear tabla*/}
          <thead>
            {/*cabeza de la tabla*/}
            <tr>
              {/*fila*/}
              <th colSpan={2}>Grace Murray Hopper</th>
              {/*columna(titulo principal) tmb TD*/}
            </tr>
          </thead>
          <tbody>
            {/*cuerpo de la tabla*/}
            <tr>
              <td colSpan={2}>
                {/*columna*/}
                <img src="https://www.quien.net/wp-content/uploads/Grace-Hopper.jpg" alt="Grace Hopper" />
                {/* etiueta vacia*/}
                <p>Rear Admiral Grace M. Hopper, 1984</p>
              </td>
            </tr>
            <tr>
              <th>Nickname</th>
              <td>"Amazing Grace"</td>
            </tr>
            <tr>
              <th>Born</th>
              <td>December 9, 1996</td>
            </tr><tr>
              <th>Died</th>
              <td>January 1, 1992(age 85)</td>
            </tr>
            <tr>
              <th>Allegiance</th>
              <td>
                <img src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/23px-Flag_of_the_United_States.svg.png" alt="EEUU" />United States of America</td>
            </tr>
          </tbody>
        </table>
    );
  }
}

export default Aside;
