import React from 'react'
import { OverlayWrapper, Layout, SEO } from 'Common'
import { Header } from 'Theme'
import { Intro, Services } from 'Components/landing'

export default () => (
	<Layout>
		<SEO />
		<OverlayWrapper>
			<Header />
			<Intro />
		</OverlayWrapper>
		<Services />
	</Layout>
)
