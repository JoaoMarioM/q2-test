import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import useAuth from '../../hooks/auth';
import { FormInputsProps } from './interface';

export const useLogin = () => {
  const { signIn, isLoading } = useAuth()

  const schema = yup.object({
    email: yup.string().email("Email invalido").required(),
    password: yup.string().required(),
  }).required();

  const initialValues = {
    email: "",
    password: ""
  };

  const { control, handleSubmit, formState: { errors } } = useForm<FormInputsProps>({
    defaultValues: initialValues,
    resolver: yupResolver(schema)
  })

  const handleLogin = (data: FormInputsProps) => {
    signIn(data);
  }

  return {
    handleLogin,
    handleSubmit,
    control,
    errors,
    isLoading
  }
}