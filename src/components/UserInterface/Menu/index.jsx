import React from "react";
import {
  Flex,
  Heading,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  useDisclosure,
  Text,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import PropTypes from "prop-types";

const Menu = ({ filtrarPuntos }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex px="24px" py="16px" justify="space-between">
      <Flex align="center">
        <Heading>MAPA DEL TANGO</Heading>
      </Flex>
      <Flex align="center" onClick={onOpen} cursor="pointer">
        <HamburgerIcon w={7} h={7} />
      </Flex>
      <Drawer placement="top" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">
            <Flex justify="space-between">
              <Flex>
                <Heading>MAPA DEL TANGO</Heading>
              </Flex>
              <Flex align="center" cursor="pointer">
                <CloseIcon onClick={onClose} />
              </Flex>
            </Flex>
          </DrawerHeader>
          <DrawerBody>
          <Text
              onClick={() => {
                filtrarPuntos("todos");
                onClose();
              }}
            >
              TODOS
            </Text>
            <Text
              onClick={() => {
                filtrarPuntos("milonga");
                onClose();
              }}
            >
              MILONGAS
            </Text>
            <Text
              onClick={() => {
                filtrarPuntos("centro-cultural");
                onClose();
              }}
            >
              CENTROS CULTURALES
            </Text>
            <Text
              onClick={() => {
                filtrarPuntos("casa-artista");
                onClose();
              }}
            >
              CASAS DE ARTISTAS
            </Text>
            <Text>ACERCA DE ESTE PROYECTO</Text>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
};

Menu.propTypes = {
  filtrarPuntos: PropTypes.func.isRequired,
};

export default Menu;
