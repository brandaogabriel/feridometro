import {
  Accordion as ChakraAccordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Flex,
  Image,
  Stack,
  Text,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';

import { i_evaluation, t_evaluation, T_evaluationProps } from '../../Mock/evaluation';
import { themeFonts } from '../../styles/global';

export function EvaluationPage() {
  const [currentMock, setCurrentMock] = useState<T_evaluationProps[]>([]);

  useEffect(() => {
    console.log(location.pathname);
    if (location.pathname.includes('Tecido')) {
      setCurrentMock(t_evaluation);
    }
    if (location.pathname.includes('Inflamação')) {
      setCurrentMock(i_evaluation);
    }
  }, []);

  return (
    <Stack display="flex" justifyContent="center" alignItems="center" width="100%">
      <Flex
        maxWidth="768px"
        flexDirection="column"
        padding="1rem"
        fontFamily={themeFonts.fonts.title}
        gap="1rem"
      >
        <Text>AVALIE OS TIPOS DE TECIDOS PRESENTES NO LEITO DA FERIDA</Text>
        {currentMock.map((evlt) => (
          <ChakraAccordion allowMultiple width="100%" key={evlt.title}>
            <AccordionItem boxShadow="rgba(0, 0, 0, 0.16) 0px 1px 4px" padding="1rem">
              <Flex alignItems="center">
                <Box bgColor={evlt.color} height="35px" width="50px" />
                <Flex justifyContent="space-between" flex="2" paddingLeft="1rem">
                  <Flex flexDirection="column" width="90%">
                    <Text
                      fontSize={themeFonts.fontSizes.large}
                      fontWeight="600"
                      color="blue.400"
                    >
                      {evlt.title}
                    </Text>
                  </Flex>

                  <AccordionButton
                    flex="1"
                    p="0"
                    bgColor="transparent"
                    display="flex"
                    justifyContent="center"
                  >
                    <AccordionIcon fontSize={themeFonts.fontSizes.large} />
                  </AccordionButton>
                </Flex>
              </Flex>
              <AccordionPanel
                pb={4}
                display="flex"
                alignItems="center"
                justifyContent="center"
                flexDirection="column"
                gap="1rem"
              >
                {evlt.children.map((child) => (
                  <AccordionItem
                    key={child.title}
                    w="100%"
                    boxShadow="rgba(0, 0, 0, 0.16) 0px 1px 4px"
                    padding="1rem"
                  >
                    <Flex alignItems="center">
                      <Image
                        src={child.srcImage}
                        height="50px"
                        width="50px"
                        borderRadius="full"
                      />
                      <Flex justifyContent="space-between" flex="2" paddingLeft="1rem">
                        <Flex flexDirection="column" width="90%">
                          <Text fontSize={themeFonts.fontSizes.large} fontWeight="600">
                            {child.title}
                          </Text>
                        </Flex>

                        <AccordionButton
                          flex="1"
                          p="0"
                          bgColor="transparent"
                          display="flex"
                          justifyContent="center"
                        >
                          <AccordionIcon fontSize={themeFonts.fontSizes.large} />
                        </AccordionButton>
                      </Flex>
                    </Flex>
                    <AccordionPanel
                      pb={4}
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      flexDirection="column"
                      gap="1rem"
                    >
                      <Flex
                        key={child.title}
                        flexDirection="column"
                        justifyContent="space-between"
                        alignItems="center"
                      >
                        <Image
                          src={child.srcImage}
                          height="150px"
                          width="150px"
                          borderRadius="full"
                          marginY="1rem"
                        />
                        <Text textAlign="justify">{child.description}</Text>
                      </Flex>
                    </AccordionPanel>
                  </AccordionItem>
                ))}
              </AccordionPanel>
            </AccordionItem>
          </ChakraAccordion>
        ))}
      </Flex>
    </Stack>
  );
}
