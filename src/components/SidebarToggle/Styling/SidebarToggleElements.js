import styled from 'styled-components';
import { FaBars, FaTimes } from 'react-icons/fa';

export const Bars = styled(FaBars)`
font-size: 1.5rem;
color: var(--tertiary);
position: absolute;
top: 0;
left: 0;
margin: 1rem;
cursor: pointer;
`

export const Close = styled(FaTimes)`
font-size: 1.5rem;
color: var(--tertiary);
position: absolute;
top: 0;
left: 0;
margin: 1rem;
cursor: pointer;
z-index: 999;
`