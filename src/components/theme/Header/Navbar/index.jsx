import React from 'react'
import { Link } from 'gatsby'
import { Container } from 'Common'
import Logo from 'Static/favicon/favicon-512.png'
import NavbarLinks from '../NavbarLinks'
import { Wrapper, BrandLogo, Brand } from './styles'

const Navbar = () => (
	<Wrapper as={Container}>
		<Brand as={Link} to="/">
			<BrandLogo color="#212121" strokeWidth="1">
				<img src={Logo} alt="Siris Technology" />
			</BrandLogo>
			Merobiha.com
		</Brand>
		<NavbarLinks desktop />
	</Wrapper>
)

export default Navbar
