import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Container } from 'Components/common'
import Service from './Service'
import { Wrapper, Flex } from './styles'

export const Services = () => {
	const {
		services: { edges },
	} = useStaticQuery(graphql`
		query {
			services: allServicesYaml {
				edges {
					node {
						id
						title
						icon
						description
					}
				}
			}
		}
	`)
	return (
		<Wrapper>
			<Container>
				<Flex>
					{edges.map(({ node }) => (
						<Service key={node.id} {...node} />
					))}
				</Flex>
			</Container>
		</Wrapper>
	)
}
