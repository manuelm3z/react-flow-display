import React, {
	Component
} from 'react';
import PropTypes from 'prop-types';

const styles = {
	wrapper: {
		borderColor: 'black',
		borderStyle: 'solid',
		borderWidth: 1,
		height: 50,
		width: 50,
		display: 'flex',
		flexDirection: 'row',
		padding: 2
	},
	sections: {
		flex: 1
	},
	list: {
		margin: 0,
		height: '100%',
		paddingTop: 0,
		paddingRight: 0,
		paddingBottom: 0,
		paddingLeft: 10,
		display: 'flex',
		justifyContent: 'space-between',
		flexDirection: 'column',
		fontFamily: '"Arial", sans-serif',
		fontSize: '0.4em'
	},
	barSection: {
		flexDirection: 'column-reverse',
		display: 'flex'
	},
	p: {
		margin: 0,
		display: 'inline-block',
		height: 15,
		fontSize: '0.7em',
		textAlign: 'center',
		fontWeight: 'bold',
		fontFamily: '"Arial", sans-serif'
	}
};

export default class Flow extends Component {
	constructor(props) {
		super(props);
		
		this.state = {
			value: 0
		};
	}

	componentWillReceiveProps(nextProps) {
		this.setState({
			value: nextProps.value
		});
	}

	render() {
		const bar = {
			backgroundColor: this.props.color,
			flex: ((this.state.value * 100 / parseInt(this.props.max)) * 0.01).toFixed(1),
			transition: 'height 0.3s',
			minHeight: 20,
			flexDirection: 'column-reverse',
			display: 'flex'
		};

		let lis = [], i = parseInt(this.props.min);

		while (i < parseInt(this.props.max)) {
			lis.unshift((
				<li key={i}>{i}</li>
			));

			i = i + (parseInt(this.props.max) / 5);

			i = parseInt(i.toFixed(1))
		}

		return (
			<div>
				<div style={styles.wrapper}>
					<div style={styles.sections}>
						<ul style={styles.list}>{lis}</ul>
					</div>
					<div style={{
						flex: 1,
						flexDirection: 'column-reverse',
						display: 'flex'
					}}>
						<div style={bar}></div>
					</div>
				</div>
				<div>
					<p style={styles.p}>{this.state.value} {this.props.unit}</p>
				</div>
			</div>
		);
	}
}

Flow.defaultProps = {
	color: 'red',
	unit: '',
	min: 0,
	max: 100,
	value: 0
};

Flow.propTypes = {
	color: PropTypes.string,
	unit: PropTypes.string,
	min: PropTypes.number,
	max: PropTypes.number,
	value: PropTypes.number
};