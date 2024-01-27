import { Input, InputProps } from '@chakra-ui/react';
import React, { FC } from 'react';

type CustomInputProps = InputProps & {
	placeholder?: string;
};

const CustomInput: FC<CustomInputProps> = ({ placeholder, ...props }) => {
	// HOOKS

	// STATE

	// VARIABLES

	// STYLES

	// FUNCTIONS

	// EFFECTS

	// COMPONENTS

	return (
		<Input
			focusBorderColor='primary.dark'
			placeholder={placeholder && placeholder}
			{...props}
		/>
	);
};

export default CustomInput;
