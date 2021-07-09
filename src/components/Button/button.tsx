/*
 * @Description: 
 * @Author: 仲灏<izhaong@outlook.com>
 * @Date: 2021-07-09 17:15:54
 * @LastEditors: 仲灏<izhaong@outlook.com>
 * @LastEditTime: 2021-07-09 18:14:19
 */
import React from 'react'

export enum ButtonSize {
  Large = 'lg',
  Small = 'sm'
}

export enum ButtonType {
  Primary = 'primary',
  Default = 'Default',
  Danger = 'danger'
  , Link = 'link'
}


interface BaseButtonProps {
  className?: string;
  disabled?: boolean;
  size?: ButtonSize;
  btnType?: ButtonType;
  children: React.ReactNode;
}

const Button: React.FC<BaseButtonProps> = (props) => {
  const { btnType, disabled, size, children } = props
}