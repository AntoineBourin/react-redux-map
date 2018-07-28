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

    componentWillReceiveProps(nextProps) {
        const infoText = document.getElementById('station-contract');
        if (nextProps.stationNumber) {
            infoText.classList.remove('hidden');
            infoText.innerText = nextProps.stationNumber + ' stations de vélo à ' + nextProps.contractFilter.contractName;
        } else if (!nextProps.stationNumber && nextProps.contractFilter.isFiltered === true) {
            infoText.classList.remove('hidden');
            infoText.innerText = 'Aucune station dans cette ville.';
        }
    }

    render() {
        return (
          <div>
              <h2>Filtrer les stations</h2>
              <form>
                  <select name="contracts" onChange={this._contractsChanged.bind(this)} defaultValue="-">
                      <option value="-" disabled>Afficher un contrat</option>
                      {this.getContracts()}
                  </select>
                  <p id="station-contract" className="hidden"></p>
                  <label htmlFor="opened-stations">Afficher stations ouvertes</label>
                  <input type="checkbox" name="opened-stations"/>
              </form>
          </div>
        );
    }
}

export default Filtermap;