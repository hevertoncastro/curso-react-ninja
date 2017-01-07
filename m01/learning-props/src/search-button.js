'use strict'

import React from 'react'
import Button from './button'

const SearchButton = () => (
  <Button handleClick={() => alert('Pesquisar')}>
    Pesquisar
  </Button>
)

export default SearchButton
