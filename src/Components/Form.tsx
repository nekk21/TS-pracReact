import React, { useRef } from 'react'
import styled from 'styled-components'

const FormStyled = styled.div`
	.mr2 {
		display: block;
		width: 500px;
		margin: auto;
		margin-top: 2rem;
	}
`
interface TodoProps {
	onAdd(title: string): void
}

export const Form: React.FC<TodoProps> = props => {
	const value = useRef<HTMLInputElement>(null)

	const keyHandler = (e: React.KeyboardEvent) => {
		if (e.key === 'Enter') {
			props.onAdd(value.current!.value)
			value.current!.value = ''
		}
	}

	return (
		<FormStyled>
			<div className='input-field mr2 '>
				<input
					onKeyPress={keyHandler}
					ref={value}
					type='text'
					id='title'
					name='noName'
					placeholder='Input Delo'
				/>
				<label htmlFor='title' className='active'>
					Input Delo
				</label>
			</div>
		</FormStyled>
	)
}
