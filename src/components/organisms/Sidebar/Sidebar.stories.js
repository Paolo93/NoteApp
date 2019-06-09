import React from 'react';
// import styled from "styled-components";
import { storiesOf } from '@storybook/react';
import StoryRouter from 'storybook-react-router';
import Sidebar from './Sidebar';

storiesOf("Organisms/Sidebar", module)
    .addDecorator(StoryRouter())
    .add("Normal", () => <Sidebar />);