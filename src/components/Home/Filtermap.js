import React, { Component } from 'react';


class Filtermap extends Component {

    componentWillMount() {
        this.props.contractslist();
    }

    getContracts() {
        const contracts = this.props.contracts;

        return Object.keys(contracts).map((contract) => {
           return (
             <option value={contract} key={contract}>{contracts[contract].name}</option>
           );
        });
    }

    _contractsChanged(event) {
        this.props.filtercontracts(event.target.value);
    }

    render() {
        return (
          <div>
              <form>
                  <select name="contracts" onChange={this._contractsChanged.bind(this)}>
                      <option value="-">Afficher un contrat</option>
                      {this.getContracts()}
                  </select>
                  <label htmlFor="opened-stations">Afficher stations ouvertes</label>
                  <input type="checkbox" name="opened-stations"/>
              </form>
          </div>
        );
    }
}

export default Filtermap;