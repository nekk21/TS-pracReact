import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const NavStyled = styled.div`
	.for-stytle {
		padding-left: 2rem;
		padding-right: 2rem;
	}
`

const Navbar: React.FC = () => (
	<NavStyled>
		<nav>
			<div className='nav-wrapper blue darken-2 px1'>
				<a href='/' className='brand-logo'>
					TS
				</a>
				<ul className='right hide-on-med-and-down'>
					<li>
						<NavLink to='/'>Dela</NavLink>
					</li>
					<li>
						<NavLink to='/about'>Info</NavLink>
					</li>
				</ul>
			</div>
		</nav>
	</NavStyled>
)

export default Navbar
