import React, {Component} from 'react';
import './HealCalculator.css';
import InputComponent from "./inputComponent";

class HealCalculator extends Component {
    constructor(props) {
        super(props);

        this.state = {
            int: null,
            equipment: null,
            bal: null,
        }
    }

    intChangedHandler = (e) => {
        const value = parseFloat(e.target.value);

        this.setState({
            int: value
        });
    };

    equipmentChangedHandler = (e) => {
        const value = parseFloat(e.target.value);

        this.setState({
            equipment: value
        });
    };

    calculateMaxHeal = () => {
        const equip = this.state.equipment + 10 || 10;
        const str = this.state.int;

        const baseConstant = 5;
        const baseLog = 2;

        return Math.floor(baseConstant * (Math.log(equip * str) / Math.log(baseLog)));
    };

    render() {
        const healAmount = (this.state.int) ? `Max Heal: ${this.calculateMaxHeal()}` : '';
        return (
            <div
                className={'HealCalculator'}>
                <h1
                    style={{textAlign: 'center'}}>Heal calculator</h1>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column'
                }}>

                    <InputComponent name={'INT:'}
                                    onChange={this.intChangedHandler}/>

                    <InputComponent name={'EQUIP:'}
                                    onChange={this.equipmentChangedHandler}/>

                </div>


                <p style={{textAlign: 'center'}}>{healAmount}</p>
            </div>
        )
    }
}

export default HealCalculator;
