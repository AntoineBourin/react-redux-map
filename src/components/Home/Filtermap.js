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
        const statusForm = document.getElementById('filterform-status');
        if (nextProps.stationNumber) {
            statusForm.classList.add('hidden');
            infoText.classList.remove('hidden');
            infoText.innerText = nextProps.stationNumber + ' stations de vélo à ' + nextProps.contractFilter.contractName;
        } else if (!nextProps.stationNumber && nextProps.contractFilter.isFiltered === true) {
            statusForm.classList.add('hidden');
            infoText.classList.remove('hidden');
            infoText.innerText = 'Aucune station dans cette ville.';
        }
    }

    resetFilter(e) {
        const statusForm = document.getElementById('filterform-status');
        statusForm.classList.remove('hidden');
        statusForm.innerText = 'Les filtres ont été désactivés.';
        e.preventDefault();
        this.props.resetFilterContract();
    }

    render() {
        return (
          <div>
              <h2>Filtrer les stations</h2>
              <p id="filterform-status" className="hidden"></p>
              <form onSubmit={this.resetFilter.bind(this)}>
                  <p id="station-contract" className="hidden"></p>
                  <select name="contracts" onChange={this._contractsChanged.bind(this)} defaultValue="-">
                      <option value="-" disabled>Afficher un contrat</option>
                      {this.getContracts()}
                  </select>
                  <label htmlFor="opened-stations">Afficher stations ouvertes</label>
                  <input type="checkbox" name="opened-stations"/>
                  <input type="submit" value="Effacer filtres" />
              </form>
          </div>
        );
    }
}

export default Filtermap;