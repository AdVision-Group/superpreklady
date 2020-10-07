import styled from 'styled-components'

export const NavigationMainContainer = styled.div`
	display: flex;
	width: 100%;
	flex-direction: row;
	justify-content: flex-start;

`

export const NavigationBundlerContainer = styled.div`
	padding: 5px;
	margin: 5px;
	display: flex;
	flex-direction: row;
`

export const NavigationContext = styled.div`
	padding: 5px;
	margin: 5px;
	font-size: 25px;
	transform: rotate(90deg);
	height: 20%;
	@media only screen and (max-width: ${({ theme }) =>
			theme.brakePoints.lmw}) {
		display: none;
	}
`

export const NavigationContainer = styled.div`
	padding: 5px;
	margin: 5px;
	display: flex;
	justify-content: center;
	align-content: center;
	flex-direction: column;
`

export const NavigationContactContainer = styled.div`
	padding: 5px;
	margin: 5px 5px 5px 450px;
	display: flex;
	align-content: center;
	flex-direction: column;
	justify-content: flex-end;
`
export const ContactContainer = styled.div`
	padding: 5px;
	margin: 5px;
`
export const Span = styled.div`
	padding: 2px;
	margin: 2px;
	font-size: 19px;
`
