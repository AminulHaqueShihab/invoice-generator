import { NAVBAR } from '@/constants/constants';
import {
	Avatar,
	Button,
	Center,
	Flex,
	FlexProps,
	Grid,
	Heading,
	IconButton,
	Menu,
	MenuButton,
	MenuItem,
	MenuList,
	useColorMode,
	useColorModeValue,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import React, { FC } from 'react';
import { FaChevronDown, FaMoon, FaSun } from 'react-icons/fa';

type NavbarProps = {};

const Navbar: FC<NavbarProps> = ({}) => {
	// HOOKS
	const navBgColor = useColorModeValue('primary.light', 'primary.dark');
	const buttonColor = useColorModeValue(
		'buttonColor.light',
		'buttonColor.dark'
	);
	const { colorMode, toggleColorMode } = useColorMode();
	// STATE

	// VARIABLES

	// STYLES

	// FUNCTIONS

	// EFFECTS

	// COMPONENTS
	type ContainerProps = FlexProps & {
		children: React.ReactNode;
	};
	const Container: FC<ContainerProps> = ({ children, ...props }) => (
		<Flex
			cursor='pointer'
			_hover={{
				base: {},
				md: {
					bg: 'primary.dark',
					_dark: {
						bg: 'primary.light',
					},
				},
			}}
			as={motion.div}
			whileTap={{ scale: 0.9 }}
			p={2}
			borderRadius='full'
			{...props}
		>
			{children}
		</Flex>
	);

	return (
		<Flex
			maxH={{ base: NAVBAR.MAX_HEIGHT_BASE, lg: NAVBAR.MAX_HEIGHT_LARGE }}
			bg={navBgColor}
			position='sticky'
			top={0}
			zIndex={9999}
		>
			<Flex
				px={{ base: '1rem', lg: '2rem' }}
				w='full'
				maxW={NAVBAR.MAX_WIDTH}
				mx='auto'
				justify='space-between'
				py='1rem'
				alignItems='center'
			>
				<Flex gap='3rem' alignItems='center' color='white'>
					<Heading>Invoice Nest</Heading>
					<Flex gap='1rem' alignItems='center'>
						<Button variant='link' color='white'>
							Help
						</Button>
						<Button variant='link' color='white'>
							Invoice Guide
						</Button>
						<Button variant='link' color='white'>
							About us
						</Button>
					</Flex>
				</Flex>
				<Flex gap='1rem' alignItems='center'>
					<Container onClick={toggleColorMode}>
						{colorMode == 'light' ? (
							<FaSun color='white' />
						) : (
							<FaMoon color='white' />
						)}
					</Container>
					<Menu>
						<MenuButton
							as={Button}
							bg={buttonColor}
							px={2}
							rightIcon={<FaChevronDown />}
						>
							<Avatar size='sm' src='https://bit.ly/broken-link' />
						</MenuButton>
						<MenuList>
							<MenuItem>Profile</MenuItem>
							<MenuItem>Drafts</MenuItem>
						</MenuList>
					</Menu>
				</Flex>
			</Flex>
		</Flex>
	);
};

export default Navbar;
