import {
	Flex,
	NumberDecrementStepper,
	NumberIncrementStepper,
	NumberInput,
	NumberInputField,
	NumberInputStepper,
	TableRowProps,
	Td,
	Text,
	Tr,
} from '@chakra-ui/react';
import React, { FC, use, useEffect, useState } from 'react';
import CustomInput from '../input/CustomInput';

type TableRowInputProps = TableRowProps & {};

const TableRowInput: FC<TableRowInputProps> = ({ ...props }) => {
	// HOOKS

	// STATE
	const [description, setDescription] = useState('');
	const [quantity, setQuantity] = useState(1);
	const [price, setPrice] = useState(0.0);
	const [total, setTotal] = useState(0.0);
	// VARIABLES

	// STYLES

	// FUNCTIONS

	// EFFECTS
	useEffect(() => {
		setTotal(parseFloat((quantity * price).toFixed(2)));
	}, [quantity, price]);
	// COMPONENTS

	return (
		<Tr {...props}>
			<Td>
				<CustomInput
					placeholder='Description of service or prouct...'
					value={description}
					onChange={e => setDescription(e.target.value)}
					w='400px'
				/>
			</Td>
			<Td>
				<NumberInput
					focusBorderColor='primary.dark'
					defaultValue={1}
					min={1}
					max={1000}
					value={quantity}
					onChange={(valueString, valueNumber) => setQuantity(valueNumber)}
				>
					<NumberInputField />
					<NumberInputStepper>
						<NumberIncrementStepper />
						<NumberDecrementStepper />
					</NumberInputStepper>
				</NumberInput>
			</Td>
			<Td>
				<CustomInput
					value={price}
					onChange={e => setPrice(parseFloat(e.target.value))}
					type='number'
				/>
			</Td>
			<Td>
				<Flex w='fit-content'>$ {total}</Flex>
			</Td>
		</Tr>
	);
};

export default TableRowInput;
