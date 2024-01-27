import React, { FC, useState } from 'react';
import Column from '../layout/Column';
import {
	Button,
	Center,
	Flex,
	Grid,
	Heading,
	Input,
	InputGroup,
	InputLeftAddon,
	InputLeftElement,
	InputRightElement,
	NumberDecrementStepper,
	NumberIncrementStepper,
	NumberInput,
	NumberInputField,
	NumberInputStepper,
	Table,
	Tbody,
	Td,
	Textarea,
	Th,
	Thead,
	Tr,
} from '@chakra-ui/react';
import { FaPlus } from 'react-icons/fa';
import { motion } from 'framer-motion';
import InputImage from '../util/input/InputImage';
import CustomInput from '../util/input/CustomInput';
import TableRowInput from '../util/table/TableRowInput';

type HomePageProps = {};

const HomePage: FC<HomePageProps> = ({}) => {
	// HOOKS

	// STATE
	const [logo, setLogo] = useState('');
	// VARIABLES

	// STYLES
	const [items, setItems] = useState<Object[]>(['']);
	// FUNCTIONS

	const addItemsField = () => {
		setItems([...items, '']);
	};

	const handleItemsChange = (index: number, value: string) => {
		const updatedItems = [...items];
		updatedItems[index] = value;
		setItems(updatedItems);
	};
	// EFFECTS

	// COMPONENTS
	const header = (
		<Flex justify='space-between' alignItems='center'>
			{/* left elements */}
			<InputImage value={logo} setValue={setLogo}>
				<FaPlus /> Add Your Logo
			</InputImage>
			{/* right elements */}
			<Column gap={4}>
				<Heading fontSize='3rem'>Invoice</Heading>
				<InputGroup>
					<InputLeftAddon children='#' />
					<Input type='number' placeholder='No.' />
				</InputGroup>
			</Column>
		</Flex>
	);
	const from = (
		<Grid templateColumns='1fr 1fr' alignItems='end'>
			<Column gap={3}>
				<InputGroup>
					<InputLeftAddon children='From' />
					<Input placeholder='Name' />
				</InputGroup>
				<InputGroup>
					<InputLeftAddon children='Address' />
					<Input placeholder='Address' />
				</InputGroup>
			</Column>
			<Column maxW='60%' justifySelf='flex-end' gap={3}>
				<InputGroup>
					<InputLeftAddon children='Date' />
					<Input type='date' />
				</InputGroup>
				<InputGroup>
					<InputLeftAddon children='Due Date' />
					<Input type='date' />
				</InputGroup>
				<InputGroup>
					<InputLeftAddon children='Reference' />
					<Input type='text' placeholder='Reference' />
				</InputGroup>
			</Column>
		</Grid>
	);
	const to = (
		<Column gap={3}>
			<Flex justify='space-between' gap={6}>
				<InputGroup>
					<InputLeftAddon children='To' />
					<Input placeholder='Name' />
				</InputGroup>
				<InputGroup>
					<InputLeftAddon children='Email' />
					<Input placeholder='Email' />
				</InputGroup>
			</Flex>
			<InputGroup>
				<InputLeftAddon children='Address' h='full' />
				<Textarea size='sm' borderLeftRadius={0} placeholder='Address' />
			</InputGroup>
		</Column>
	);
	return (
		<Column p='2rem'>
			<Grid templateColumns='5fr 1fr' gap='3rem'>
				<Column border='1px solid gray' p='1rem' bg='white' w='full' gap={8}>
					{header}
					{from}
					{to}
					<Table variant='unstyled'>
						<Thead>
							<Tr bg='primary.dark' borderRadius='1rem'>
								<Th>Item</Th>
								<Th>Quantity</Th>
								<Th>Rate</Th>
								<Th>Amount</Th>
							</Tr>
						</Thead>
						<Tbody>
							{items.map((item, index) => (
								<TableRowInput />
							))}

							<Button onClick={addItemsField}>+ Add Item</Button>
						</Tbody>
					</Table>
				</Column>
				<Column>
					<h1>Home Page</h1>
				</Column>
			</Grid>
		</Column>
	);
};

export default HomePage;
