import Column from '@/components/layout/Column';
import { PAGE } from '@/constants/constants';
import { FlexProps, Grid, Text } from '@chakra-ui/react';
import React, { FC } from 'react';
import { FaHeart } from 'react-icons/fa';

type FooterProps = FlexProps & {};

const Footer: FC<FooterProps> = ({ ...props }) => {
	return (
		<Column bg='gray.300' w='full' {...props}>
			<Column maxW={PAGE.MAX_WIDTH} w='full' mx='auto' p='2rem' gap={8}>
				<Grid templateColumns={{ base: '1fr', lg: '1fr 1fr 1fr' }}>
					<Column alignItems='center'>
						<Text>Footer</Text>
						<Text>Footer</Text>
						<Text>Footer</Text>
						<Text>Footer</Text>
					</Column>
					<Column alignItems='center'>
						<Text>Footer</Text>
						<Text>Footer</Text>
						<Text>Footer</Text>
						<Text>Footer</Text>
					</Column>
					<Column alignItems='center'>
						<Text>Footer</Text>
						<Text>Footer</Text>
						<Text>Footer</Text>
						<Text>Footer</Text>
					</Column>
				</Grid>
				<Text alignSelf='center'>
					© 2024 All rights reserved. Made with 🖤 by Md Aminul Haque
				</Text>
			</Column>
		</Column>
	);
};

export default Footer;
