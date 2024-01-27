'use client';
import { PAGE } from '@/constants/constants';
import React, { FC } from 'react';
import Column from './Column';
import Navbar from '../sections/navbar/Navbar';
import Footer from '../sections/footer/Footer';
import {  useColorModeValue } from '@chakra-ui/react';

type PageLayoutProps = {
	children?: React.ReactNode;
};

const PageLayout: FC<PageLayoutProps> = ({ children }) => {
  const bgColor = useColorModeValue('bg.light', 'bg.dark')
	return (
		<>
			<Navbar />
			<Column maxW={PAGE.MAX_WIDTH} w='full' mx='auto'>
				{children && children}
			</Column>
			<Footer />
		</>
	);
};

export default PageLayout;
