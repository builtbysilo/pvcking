import {
  Flex,
  Grid,
  GridItem,
  Text,
  Heading,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Lorem,
  Button,
} from "@chakra-ui/react";

import Image from "next/image";

export default function Home() {
  return (
    <Flex
      h="100vh"
      w="100vw"
      bgColor="#fff"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      gap="4"
    >
      <Image src="/pvcking-license.jpg" width="200" height="100"></Image>
      <Heading size="xl">The PVC King</Heading>
      <Heading size="md">You can tell by my license plate</Heading>
      <iframe
        src="https://giphy.com/embed/QCQZ1wjZFAXM6P5wjL"
        width="480"
        height="270"
        frameBorder="0"
        class="giphy-embed"
        allowFullScreen
      ></iframe>
    </Flex>
  );
}
