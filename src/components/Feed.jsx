import React from 'react'
import {useState, useEffect} from 'react';
import {Box, Stack, Typography} from '@mui/material';
import { CopyrightTwoTone } from '@mui/icons-material';
import {Sidebar, Videos} from './';
// import Sidebar from './Sidebar';
// import Videos from './Videos'; 

import {fetchFromAPI} from '../utils/fetchFromAPI.js';

const Feed = () => {

  const [selectedCategory, setSelectedCategory] = useState('New');

  useEffect(()=>{
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`);
  },[]);

  
  return (
    <Stack sx={{flexDirection:{ sx:'column', md:'row'}}}>
      <Box sx={{height:{sx:'auto', md:'92vh'},
                 borderRight:'1px solid #3d3d3d', px:{sx:0, md:2}}}>
                  <Sidebar
                    selectedCategory={selectedCategory}
                    setSelectedCategory={setSelectedCategory}
                  
                  />
                  <Typography className='copyright'
                              variant='body3' sx={{mt:1.5, color:'#fff'}}>
                                Copyright 2023 Faigon.Tech

                  </Typography>
      </Box>
      <Box p={2} sx={{overflowY:'auto',height:'90vh, flex:2'}}>
        <Typography variant='h4' fontWeight='bold' mb={2} sx={{color:'white'}}>
          {selectedCategory}<span style={{color:'red'}}>
            videos
          </span>
        </Typography>
        <Videos videos={[]}/>
      </Box>
    </Stack>
  )
}

export default Feed