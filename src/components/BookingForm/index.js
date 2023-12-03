"use client";

import {
    Box,
    Button,
    HStack,
    VStack,
    Container,
    Input,
    Stack,
    Flex
} from "@chakra-ui/react";

import React from "react";

const BookingForm = () => {
  return (
    <Container bg={"whitesmoke"} rounded={"10px"} p={"6%"} w={'650px'} h={'500px'}>

      <Box 
      as={"form"} flex={'column'} justifyContent={'space-between'} alignItems={'center'} gap={'10'} marginTop={''} >
        <Flex direction={'column'} justifyContent={"space-between"} gap={'30px'} >
          <Input
            height={'40px'}
            placeholder="Your name..."
            bg={""}
            rounded={'10px'}
            color={"black"}
            
            _placeholder={{
              color: "",
            }}
          />
          <Input
          height={'40px'}
            placeholder="Your email..."
            bg={''}
            rounded={'10px'}
            color={"black"}
            _placeholder={{
              color: "",
            }}
          />
          <Input
          height={'40px'}
            placeholder="Your phone number..."
            bg={""}
            rounded={'10px'}
            color={"black"}
            _placeholder={{
              color: "",
            }}
          />
          <Input 
          height={'40px'}
            placeholder="Select Date and Time" 
            bg={""}
            rounded={'10px'}
            color={"black"}
            size="md" 
            type="datetime-local" 
          />

          <Input
          height={'50px'}
            h={"60px"}
            placeholder="Your description..."
            bg={""}
            rounded={'10px'}
            marginBottom={'20px'}
            color={"black"}
            _placeholder={{
              color: "",
            }}
          />

        </Flex>
        <div className="flex justify-center items-center">
          <Button
          className="bg-emerald-600 rounded-lg w-[200px] h-[50px]  text-white flex justify-center items-center ">
            Submit
          </Button>
        </div>
      </Box>
    </Container>
    
  );
};

export default BookingForm;
