import React, { Component } from 'react';
import RollTotal from './RollTotal';
import RollArea from './RollArea';
import Controls from './Controls';
import Footer from './Footer';
import '../../src/index.css';

class App extends Component {
    state = {
        dice: [],
        hasRolled: false,
    };

    render() {
        return (
            <div className="h-screen">
                <RollTotal
                    value={this.state.dice.reduce(
                        (sum, die) => die.roll + sum,
                        0
                    )}
                />
                <RollArea dice={this.state.dice} removeDie={this.removeDie} />
                <Controls
                    addDie={this.addDie}
                    rollDice={this.rollDice}
                    clearDice={this.clearDice}
                />
                <Footer />
            </div>
        );
    }

    addDie = (dieSides) => {
        if (this.state.dice.length >= 50) return;

        const newDie = {
            sides: dieSides,
            roll: this.state.hasRolled
                ? Math.floor(Math.random() * dieSides + 1)
                : ' ',
        };

        this.setState({
            dice: [...this.state.dice, newDie],
        });
    };

    removeDie = (id) => {
        const hasRolled =
            this.state.dice.length === 1 ? false : this.state.hasRolled;

        this.setState({
            dice: [...this.state.dice.filter((die, index) => index !== id)],
            hasRolled: hasRolled,
        });
    };

    rollDice = () => {
        if (this.state.dice.length === 0) return;

        const rolledDice = this.state.dice.map((die) => {
            die.roll = Math.floor(Math.random() * die.sides + 1);

            return die;
        });

        this.setState({
            dice: rolledDice,
            hasRolled: true,
        });
    };

    clearDice = () => {
        this.setState({
            dice: [],
            hasRolled: false,
        });
    };
}

export default App;
