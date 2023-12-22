import React from 'react';
import { Stack, styled, classNamesFunction, Image, ImageFit } from '@fluentui/react';
import { ThemeToggle } from '~/global/themes';
import { UserMenu } from './UserMenu';
import logo from "~/Logo.png";

const getStyles = ({ theme }) => {
  return {
    root: {
      borderBottomStyle: 'solid',
      borderBottomColor: theme.semanticColors.bodyFrameDivider,
      borderBottomWidth: 1,
      padding: theme.spacing.s1,
      height: 48
    }
  };
};

const getClassNames = classNamesFunction();

function TopMenuComponent({ styles, theme }) {
  const classNames = getClassNames(styles, { theme });
  return (
    <Stack
      horizontal
      className={classNames.root}
      tokens={{ childrenGap: '1em' }}>
      <Stack.Item align="center" grow><Image imageFit={ImageFit.contain} src={logo} height={60}/></Stack.Item>
      {/* <Stack.Item align="center" grow><div></div></Stack.Item>   */}
      <Stack.Item align="center"><UserMenu /></Stack.Item>
      <Stack.Item align="center"><ThemeToggle /></Stack.Item>
    </Stack>
  );
}

export const TopMenu =  styled(TopMenuComponent, getStyles);
