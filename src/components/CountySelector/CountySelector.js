import { default as React, PropTypes } from 'react';
import { connect } from 'react-redux'

export default class CountySelector extends React.Component {


    handleSelect(e){
      e.preventDefault()
      this.props.selectCounty(e.target.value)
    }

render(){
  let { selectCounty, selectedCounty } = this.props


return(
    <div>
    Current Selected County: {this.props.selectedCounty}
    <br/>
      <select value={this.props.selectedCounty} defaultValue="" onChange={this.handleSelect.bind(this)} name="" id="countySelect">
          <option value="" disabled>Pick one</option>
          <option value="Baker">Baker</option>
      		<option value="Benton">Benton</option>
      		<option value="Clackamas">Clackamas</option>
      		<option value="Clatsop">Clatsop</option>
      		<option value="Columbia">Columbia</option>
      		<option value="Coos">Coos</option>
      		<option value="Crook">Crook</option>
      		<option value="Curry">Curry</option>
      		<option value="Deschutes">Deschutes</option>
      		<option value="Douglas">Douglas</option>
      		<option value="Gilliam">Gilliam</option>
      		<option value="Grant">Grant</option>
      		<option value="Harney">Harney</option>
      		<option value="Hood River">Hood River</option>
      		<option value="Jackson">Jackson</option>
      		<option value="Jefferson">Jefferson</option>
      		<option value="Josephine">Josephine</option>
      		<option value="Klamath">Klamath</option>
      		<option value="Lake">Lake</option>
      		<option value="Lane">Lane</option>
      		<option value="Lincoln">Lincoln</option>
      		<option value="Linn">Linn</option>
      		<option value="Malheur">Malheur</option>
      		<option value="Marion">Marion</option>
      		<option value="Morrow">Morrow</option>
      		<option value="Multnomah">Multnomah</option>
      		<option value="Polk">Polk</option>
      		<option value="Sherman">Sherman</option>
      		<option value="Tillamook">Tillamook</option>
      		<option value="Umatilla">Umatilla</option>
      		<option value="Union">Union</option>
      		<option value="Wallowa">Wallowa</option>
      		<option value="Wasco">Wasco</option>
      		<option value="Washington">Washington</option>
      		<option value="Wheeler">Wheeler</option>
      		<option value="Yamhill">Yamhill</option>
      	</select>
    </div>
    )
  }
}
const mapStateToProps = (state) => {

	    return {
        selectedCounty: state.countyName,
        }
}

const selectCounty = (countyName) => {
	return {type:"SELECT_COUNTY", payload: countyName }
}


const mapDispatchToProps = (dispatch) => {
  return {selectCounty: (countyName) => dispatch(selectCounty(countyName))}
}

export default connect(mapStateToProps, mapDispatchToProps)(CountySelector)
