import React, {Component} from "react";
import './Announcement.css';

export default class extends Component {
	render() {
		return (
		<div className={this.props.winner ? "visible" : "hidden"}>
			<h2> Game Over </h2>
		</div>
		)
	}
}