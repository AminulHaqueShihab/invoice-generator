import { Box, Center, CenterProps, Input } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import React, { FC } from 'react';
import { FaPlus } from 'react-icons/fa';

type InputImageProps = CenterProps & {
	children?: React.ReactNode;
	value: any;
	setValue: any;
};

const InputImage: FC<InputImageProps> = ({
	children,
	value,
	setValue,
	...props
}) => {
	return (
		<Box>
			<Input
				type='file'
				h='full'
				value={value}
				onChange={e => setValue(e.target.value)}
				display='none'
				id='hiddenFileInput'
			/>
			<Center
				as={motion.label}
				htmlFor='hiddenFileInput'
				h='100px'
				w='250px'
				bg='#F5F5F5'
				fontSize='1.25rem'
				fontWeight='500'
				color='gray'
				cursor='pointer'
				whileTap={{ scale: 0.9 }}
				{...props}
			>
				{children && children}
			</Center>
		</Box>
	);
};

export default InputImage;
