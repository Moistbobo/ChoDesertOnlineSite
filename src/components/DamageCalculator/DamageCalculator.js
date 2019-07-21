import React, {Component} from 'react';
import './DamageCalculator.css';
import InputComponent from "./inputComponent";

class DamageCalculator extends Component {
    constructor(props) {
        super(props);

        this.state = {
            str: null,
            equipment: null,
            bal: null,
            critMult: null
        }
    }

    strChangedHandler = (e) => {
        const value = parseFloat(e.target.value);

        this.setState({
            str: value
        });
    };

    equipmentChangedHandler = (e) => {
        const value = parseFloat(e.target.value);

        this.setState({
            equipment: value
        });
    };

    critMultChangedHandler = (e) => {
        const value = parseFloat(e.target.value);

        this.setState({
            critMult: value
        });
    };

    balChangedHandler = (e) => {
        const value = parseFloat(e.target.value);

        this.setState({
            bal: value
        });
    };

    calculateMaxDamage = () => {
        console.log('calculating damage');
        const equip = this.state.equipment;
        const str = this.state.str;

        const baseConstant = 5;
        const baseLog = 1.5;

        return Math.floor(baseConstant * (Math.log(equip * str) / Math.log(baseLog)));
    };

    calculateCritDamage = () => {
        return Math.floor(this.calculateMaxDamage() * this.state.critMult);
    };

    render() {
        const damage = (this.state.str && this.state.equipment) ? `Max Damage: ${this.calculateMaxDamage()}` : '';
        const critDamage = (this.state.str && this.state.equipment && this.state.critMult) ? `Max Crit Damage: ${this.calculateCritDamage()}` : '';
        return (
            <div
                className={'DamageCalculator'}>
                <h1
                    style={{textAlign: 'center'}}>Damage calculator</h1>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column'
                }}>

                    <InputComponent name={'STR:'}
                                    onChange={this.strChangedHandler}/>

                    <InputComponent name={'EQUIP:'}
                                    onChange={this.equipmentChangedHandler}/>

                    <InputComponent name={'CRIT MULT:'}
                                    onChange={this.critMultChangedHandler}/>

                    {/*<InputComponent name={'BAL:'}*/}
                    {/*                onChange={this.balChangedHandler}/>*/}
                </div>


                <p style={{textAlign: 'center'}}>{damage}</p>
                <p style={{textAlign: 'center'}}>{critDamage}</p>
            </div>
        )
    }
}

export default DamageCalculator;
