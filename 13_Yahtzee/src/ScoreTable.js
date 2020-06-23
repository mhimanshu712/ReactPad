import React, { Component } from 'react';
import RuleRow from './RuleRow';
import './ScoreTable.css';
import { ones, twos, threes, fours, fives, sixes, threeOfKind, fourOfKind, fullHouse, smallStraight, largeStraight, yahtzee, chance } from './Rules';


class ScoreTable extends Component {

  render() {
    const { scores, doScore } = this.props;

    return (
      <div className="ScoreTable">
        <section className="ScoreTable-section">
          <h2>Upper</h2>
          <table cellSpacing="0">
            <tbody>
              <RuleRow name="Ones" description={ones.description} score={scores.ones} doScore={evt => doScore("ones", ones.evalRoll)} />
              <RuleRow name="Twos" description={twos.description} score={scores.twos} doScore={evt => doScore("twos", twos.evalRoll)} />
              <RuleRow name="Threes" description={threes.description} score={scores.threes} doScore={evt => doScore("threes", threes.evalRoll)} />
              <RuleRow name="Fours" description={fours.description} score={scores.fours} doScore={evt => doScore("fours", fours.evalRoll)} />
              <RuleRow name="Fives" description={fives.description} score={scores.fives} doScore={evt => doScore("fives", fives.evalRoll)} />
              <RuleRow name="Sixes" description={sixes.description} score={scores.sixes} doScore={evt => doScore("sixes", sixes.evalRoll)} />
            </tbody>
          </table>
        </section>
        <section className="ScoreTable-section ScoreTable-section-lower">
          <h2>Lower</h2>
          <table cellSpacing="0">
            <tbody>
              <RuleRow description={threeOfKind.description} name="Three of Kind" score={scores.threeOfKind} doScore={evt => doScore("threeOfKind", threeOfKind.evalRoll)} />
              <RuleRow description={fourOfKind.description} name="Four of Kind" score={scores.fourOfKind} doScore={evt => doScore("fourOfKind", fourOfKind.evalRoll)} />
              <RuleRow description={fullHouse.description} name="Full House" score={scores.fullHouse} doScore={evt => doScore("fullHouse", fullHouse.evalRoll)} />
              <RuleRow description={smallStraight.description} name="Small Straight" score={scores.smallStraight} doScore={evt => doScore("smallStraight", smallStraight.evalRoll)} />
              <RuleRow description={largeStraight.description} name="Large Straight" score={scores.largeStraight} doScore={evt => doScore("largeStraight", largeStraight.evalRoll)} />
              <RuleRow description={yahtzee.description} name="Yahtzee" score={scores.yahtzee} doScore={evt => doScore("yahtzee", yahtzee.evalRoll)} />
              <RuleRow description={chance.description} name="Chance" score={scores.chance} doScore={evt => doScore("chance", chance.evalRoll)} />
            </tbody>
          </table>
        </section>
        <section className="ScoreTable-section"> 
          <h2>Total </h2>
        </section>
      </div>
    )
  }
}

export default ScoreTable;