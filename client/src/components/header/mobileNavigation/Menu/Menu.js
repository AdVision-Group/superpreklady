import React from 'react'
import { bool } from 'prop-types'
import { StyledMenu } from './Menu.styled'
import TheNavigation from '../../navigation/TheNavigation'

const Menu = ({ open, ...props }) => {


	const variants = {
		open: (height = 700) => ({
			clipPath: `circle(${height * 2 + 200}px at -20px -20px)`,
			transition: {
				type: 'spring',
				stiffness: 30,
				restDelta: 2,
			},
		}),
		closed: {
			clipPath: 'circle(30px at -20px -20px)',
			transition: {
				type: 'spring',
				stiffness: 400,
				damping: 40,
			},
		},
	}

	return (
		<StyledMenu
			animate={open ? 'open' : 'closed'}
			variants={variants}
			open={open}
			{...props}
		>
			<TheNavigation clickClick ={props.click}/>
		</StyledMenu>
	)
}

Menu.propTypes = {
	open: bool.isRequired,
}

export default Menu
