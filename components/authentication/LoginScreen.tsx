import React from 'react';
import { Box, Button, Input, VStack, Text, HStack, Icon, Pressable, Image } from 'native-base';
import { Ionicons } from '@expo/vector-icons';

const LoginScreen = () => {
  return (
    <Box flex={1} bg="#F5F5F9" alignItems="center" justifyContent="center" safeArea>
      {/* Logo */}
      <Image
        source={{ uri: 'https://your-logo-url-here.com' }} // Thay URL của logo vào đây
        alt="Logo"
        size="xl"
        mb={5}
      />

      {/* Form */}
      <VStack space={4} width="80%">
        {/* Số điện thoại */}
        <Input
          placeholder="Số điện thoại tài khoản"
          variant="outline"
          InputLeftElement={
            <Icon as={<Ionicons name="call-outline" />} size={5} ml="2" color="muted.400" />
          }
        />
        {/* Mật khẩu */}
        <Input
          placeholder="Mật khẩu"
          variant="outline"
          type="password"
          InputLeftElement={
            <Icon as={<Ionicons name="lock-closed-outline" />} size={5} ml="2" color="muted.400" />
          }
        />

        {/* Nút Đăng nhập */}
        <Button bg="#FF5E5E" _pressed={{ bg: '#E54B4B' }}>
          Đăng nhập
        </Button>

        {/* Nút Facebook */}
        <Button bg="#3B5998" _pressed={{ bg: '#2E4676' }}>
          Facebook
        </Button>
      </VStack>

      {/* Quên mật khẩu và Tra cứu kết quả */}
      <HStack justifyContent="space-between" width="80%" mt={4}>
        <Pressable>
          <Text color="gray.500" fontSize="sm">
            Quên mật khẩu?
          </Text>
        </Pressable>
        <Pressable>
          <Text color="gray.500" fontSize="sm">
            Tra cứu kết quả
          </Text>
        </Pressable>
      </HStack>

      {/* Nút Tài khoản mới */}
      <Button
        bg="#FF5E5E"
        _pressed={{ bg: '#E54B4B' }}
        mt={6}
        width="80%"
      >
        Tài khoản mới
      </Button>

      {/* Thông tin liên hệ */}
      <HStack mt={10} justifyContent="center">
        <Text color="gray.400" fontSize="xs">
          Hotline liên hệ: 098611263 | Website: ups.edu.vn
        </Text>
      </HStack>
    </Box>
  );
};

export default LoginScreen;
