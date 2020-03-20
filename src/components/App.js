import React, { Component } from 'react';
import RollArea from './RollArea';
import Controls from './Controls';

class App extends Component {
    state = {
        dice: [],
        hasRolled: false
    };

    render() {
        return (
            <div>
                <RollArea dice={this.state.dice} removeDie={this.removeDie} />
                <Controls
                    addDie={this.addDie}
                    rollDice={this.rollDice}
                    clearDice={this.clearDice}
                />
            </div>
        );
    }

    addDie = dieSides => {
        const newDie = {
            sides: dieSides,
            roll: this.state.hasRolled
                ? Math.floor(Math.random() * dieSides + 1)
                : ' '
        };

        this.setState({
            dice: [...this.state.dice, newDie]
        });
    };

    removeDie = id => {
        const hasRolled = this.state.dice.length === 1 ? false : true;

        this.setState({
            dice: [...this.state.dice.filter((die, index) => index !== id)],
            hasRolled: hasRolled
        });
    };

    rollDice = () => {
        if (this.state.dice.length === 0) return;

        const rolledDice = this.state.dice.map(die => {
            die.roll = Math.floor(Math.random() * die.sides + 1);

            return die;
        });

        this.setState({
            dice: rolledDice,
            hasRolled: true
        });
    };

    clearDice = () => {
        this.setState({
            dice: [],
            hasRolled: false
        });
    };
}

export default App;
