import React from 'react'
import { Link } from 'gatsby'
import { Container, Button } from 'Common'
import marriage from 'Static/illustrations/marriage.svg'
import { Wrapper, IntroWrapper, Details, Thumbnail } from './styles'

export const Intro = () => (
	<Wrapper>
		<IntroWrapper as={Container}>
			<Details>
				<h1>Find your Special Someone</h1>
				<h4>Journey of Nepali Marriage aided by Professionals.</h4>
				<Button as={Link} to="/contact">
					Register
				</Button>
			</Details>
			<Thumbnail>
				<img src={marriage} alt="Siris Technology" />
			</Thumbnail>
		</IntroWrapper>
	</Wrapper>
)
