import React from 'react';
import { PhoneIcon } from '@chakra-ui/icons';
import css from './HomePage.module.css';

const HomePage = () => (
  <>
    <h1 className={css.homePage}>
      Welcome! <PhoneIcon color="blanchedalmond" />
    </h1>
  </>
);

export default HomePage;
