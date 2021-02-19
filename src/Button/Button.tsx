import React from 'react';
import styled from 'styled-components';
import { Theme, ThemeProps } from '../ThemeProvider';

export interface ButtonProps extends ThemeProps {
    /**
     * Is this the principal call to action on the page?
     */
    primary?: boolean;
    /**
     * What background color to use
     */
    backgroundColor?: string;
    /**
     * How large should the button be?
     */
    size?: 'small' | 'medium' | 'large';
    /**
     * Button contents
     */
    children: React.ReactNode;
    /**
     * Optional click handler
     */
    onClick?: () => void;

    theme: Theme;
}

export const Button = styled.button`
    background: ${(props: ButtonProps) => props.theme.colors.primary};
`;
