import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { Switch } from 'react-native-switch';

class SwitchComponent extends Component{
	state = {currentVal: this.props.defaultValue}
	flipSwitch = () => {
		const newVal = !this.state.currentVal;
		this.setState({currentVal: newVal})
		const {toggleAction} = this.props;
		if(toggleAction) toggleAction(newVal)
	}
	render = () => {
		return (
				<Switch
			    value={this.state.currentVal}
			    onValueChange={this.flipSwitch}
			    activeText={this.props.activeText}
			    inActiveText={this.props.inActiveText}
			    circleSize={this.props.circleSize}
			    barHeight={this.props.barHeight}
			    circleBorderWidth={this.props.circleBorderWidth}
			    backgroundActive={this.props.trackColorActive}
			    backgroundInactive={this.props.trackColorInactive}
			    circleActiveColor={this.props.circleColorActive}
			    circleInActiveColor={this.props.circleColorInactive}
			    changeValueImmediately={true}
			    innerCircleStyle={{ alignItems: "center", justifyContent: "center" }} // style for inner animated circle for what you (may) be rendering inside the circle
			    outerCircleStyle={{'color': this.props.circleBorderColor}} // style for outer animated circle
			    renderActiveText={true}
			    renderInActiveText={true}
			    switchLeftPx={2} // denominator for logic when sliding to TRUE position. Higher number = more space from RIGHT of the circle to END of the slider
			    switchRightPx={2} // denominator for logic when sliding to FALSE position. Higher number = more space from LEFT of the circle to BEGINNING of the slider
			    switchWidthMultiplier={this.props.switchWidthMultiplier} // multipled by the `circleSize` prop to calculate total width of the Switch
			    switchBorderRadius={this.props.borderRadius} // Sets the border Radius of the switch slider. If unset, it remains the circleSize.
  			  />

		)
	}
}



const styles = StyleSheet.create({
	wrapper: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	}
})

export default SwitchComponent
