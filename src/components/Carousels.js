import React from 'react';
import Carousel from 'react-material-ui-carousel';
import carousel1 from '../Images/young-family-teenage-boy-office-family-therapist-psychologist-vector-flat-cartoon-illustration-psychotherapy-165822058.jpg';
import carousel2 from '../Images/online-psychotherapy-1585671734500 1.jpg';
import carousel3 from '../Images/istockphoto-1288914845-612x612.jpg';
import carousel4 from '../Images/clipart-doctor-counselling.png';


// import ImageList from '@mui/material/ImageList';
// import ImageListItem from '@mui/material/ImageListItem';

import { Box } from '@mui/system';

function Example(props) {
    var items = [
        {
            name: "Random Name #1",
            description: "Probably the most random thing you have ever seen!",
            img_url: {carousel1}
        },
        {
            name: "Random Name #2",
            description: "Hello World!",
            img_url: {carousel2}

        },
        {
            name: "Random Name #3",
            description: "Hello World!",
            img_url: {carousel3}

        }

    ]

    return (
        <Carousel>
            {
                items.map((item, i) => <Item key={i} item={item} />)
            }
        </Carousel>
    )
}

function Item(props) {
    return (
      <>
        {/* <Box > */}

        {/* <ImageList sx={{ width: '100%', height: 500 }} cols={1} rowHeight={1}>
                
                    <ImageListItem >
                        <img
                            src={`${props.item.img_url}?w=164&h=164&fit=crop&auto=format`}
                            srcSet={`${props.item.img_url}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                            alt={props.item.name}
                            loading="lazy"
                        />
                    </ImageListItem>
                
            </ImageList> */}
        <img
          className="carousel-bg"
          src={props.item.img_url}
          alt="carr"
          width="100%"
          height="650px"
        />
        {/* <div className='carousel-text'>

                <h2>{props.item.name}</h2>
                <p>{props.item.description}</p>

                <Button className="CheckButton">
                    Check it out!
                </Button>
            </div> */}
        {/* </Box> */}
      </>
    );
}

export default Example