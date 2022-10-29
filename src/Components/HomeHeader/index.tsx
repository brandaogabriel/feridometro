import { Box, IconButton, Text, useDisclosure } from '@chakra-ui/react';
import { FiLogOut, FiMenu } from 'react-icons/fi';

import { theme, themeFonts } from '../../styles/global';
import { SidebarMenu } from '../SidebarMenu';
import { ButtonsContainer } from './styles';

export function HomeHeader() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <SidebarMenu isOpen={isOpen} onClose={onClose} />
      <Box bgColor="blue.400" height="200px">
        <ButtonsContainer>
          <IconButton aria-label="open-menu" icon={<FiMenu />} onClick={onOpen} />

          <IconButton aria-label="leave-app" icon={<FiLogOut />} />
        </ButtonsContainer>

        <Text
          paddingX="1rem"
          color={theme.colors.white_100}
          fontSize={themeFonts.fontSizes.smLarge}
          marginTop="1rem"
        >
          Seja bem vindo ao Feridômetro
        </Text>

        <Text
          paddingX="1rem"
          color={theme.colors.white_100}
          fontSize={themeFonts.fontSizes.smLarge}
          marginTop="1rem"
          fontWeight={700}
        >
          Gabriel
        </Text>
      </Box>
    </>
  );
}
