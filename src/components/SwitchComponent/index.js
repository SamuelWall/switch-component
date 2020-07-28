import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { Switch } from 'react-native-switch';

class SwitchComponent extends Component{
	state = {currentVal: this.props.defaultValue.value}
	flipSwitch = () => {

		const newVal = !this.state.currentVal;
		const {onChange}=this.props.defaultValue
		if(onChange) onChange(newVal)
		this.setState({currentVal: newVal})
		if(newVal){
			const {toggleActionOn} = this.props.on;
			if(toggleActionOn) toggleActionOn(newVal)
		}
		else{
			const {toggleActionOff} = this.props.off;
			if(toggleActionOff) toggleActionOff(newVal)
		}
	}

	render = () => {
		let val = this.state.currentVal
		if(val == undefined)
			val = false;

		return (
				<Switch
			    value={val}
			    onValueChange={this.flipSwitch}
			    activeText={this.props.on.activeText}
			    inActiveText={this.props.off.inactiveText}
			    circleSize={this.props.circleSize}
			    barHeight={this.props._height}
			    circleBorderWidth={this.props.circleBorderWidth}
			    backgroundActive={this.props.on.trackColorActive}
			    backgroundInactive={this.props.off.trackColorInactive}
			    circleActiveColor={this.props.on.circleColorActive}
			    circleInActiveColor={this.props.off.circleColorInactive}
			    changeValueImmediately={true}
			    innerCircleStyle={{ alignItems: "center", justifyContent: "center" }} // style for inner animated circle for what you (may) be rendering inside the circle
			    outerCircleStyle={{'color': this.props.circleBorderColor}} // style for outer animated circle
			    renderActiveText={true}
			    renderInActiveText={true}
			    switchLeftPx={2*(this.props.circleSize/this.props._width)} // denominator for logic when sliding to TRUE position. Higher number = more space from RIGHT of the circle to END of the slider
			    switchRightPx={2*(this.props.circleSize/this.props._width)} // denominator for logic when sliding to FALSE position. Higher number = more space from LEFT of the circle to BEGINNING of the slider
			    switchWidthMultiplier={this.props._width/this.props.circleSize} // multipled by the `circleSize` prop to calculate total width of the Switch
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
