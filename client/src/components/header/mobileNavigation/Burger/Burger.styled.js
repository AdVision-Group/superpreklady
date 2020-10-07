import styled from 'styled-components'

export const StyledBurger = styled.button`
	padding: 1px;
	margin: 1px 10px 1px -25px;
	position: fixed;
	top: 5%;
	z-index: 99999;
	left: 96%;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	width: 2.5rem;
	height: 2rem;
	background: transparent;
	border: none;
	outline: none;
	cursor: pointer;
	@media only screen and (max-width: ${({ theme }) =>
			theme.brakePoints.lmw}) {
		width: 2.2rem;
		height: 1.5rem;
		
	}
	@media only screen and (min-width: ${({ theme }) =>
	theme.brakePoints.lmw}) {
		width: 2.2rem;
		height: 1.5rem;
		display: none;
		
	}


	span {
		cursor: pointer;
		width: 3.2rem;
		height: 0.25rem;
		//background: ${({ theme }) => theme.burgerButton.primaryDark};
		background: ${({ theme, open }) => open ? theme.burgerButton.voidOpen : theme.burgerButton.voidDark };
		border-radius: 10px;
		transition: all 0.2s linear;
		position: relative;
		@media only screen and (max-width: ${({ theme }) =>
				theme.brakePoints.lmw}) {
			width: 2.2rem;
			height: 0.15rem;
	
		}

		:first-child {
			transform: ${({ open }) =>
				open ? 'translateX(-20px)' : 'translateX(0)'};
		}

		:nth-child(2) {
			transform: ${({ open }) =>
				open ? 'translateX(20px)' : 'translateX(0)'};
		}
	}
`
