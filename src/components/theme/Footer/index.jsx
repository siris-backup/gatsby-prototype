import React from 'react'
import { Container } from 'Common'
import { Wrapper, Flex, Details } from './styles'

export const Footer = () => (
	<Wrapper>
		<Flex as={Container}>
			<Details>
				<span>
					© {new Date().getFullYear()}, Merobiha.com | All rights reserved
				</span>
			</Details>
		</Flex>
	</Wrapper>
)
