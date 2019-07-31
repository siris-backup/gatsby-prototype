import React from 'react'
import { Link } from 'gatsby'
import { Wrapper } from './styles'

const NavbarLinks = ({ desktop }) => (
	<Wrapper desktop={desktop}>
		<Link to="/">Login</Link>
		<Link to="/contact">Register</Link>
	</Wrapper>
)

export default NavbarLinks
