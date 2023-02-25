import React from 'react'
//hooks
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Paper, IconButton } from '@mui/material';
import {SearchIcon} from  '@mui/icons-material';


const SearchBar = () => {
  return (
    <Paper 
        component="form" 
        onSubmit={()=>{}}
        sx={{
            borderRadius:20,
            border:'1px solis #e3e3e3',
            pl:2,
            boxShadow:'none',
            marginRight:{sm: 5}
        }}
    > 
        SearchBar
    </Paper>
  )
}

export default SearchBar