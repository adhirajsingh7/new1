import React, { useState } from 'react'
import ItemsCard from './ItemsCard'
import { Button, FormControl, FormControlLabel, TextField, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

import '../Styles/Additems.css'

const Additems = () => {
    
    const [cart, setCart] = useState([{
        title : 'abc',
        description : 'hello !!',
        price : 0
    },
    {
        title : 'xyz',
        description : 'hello 2 !!',
        price : 10
    }])

    const [newCart, setNewCart] = useState({
        title : '',
        description : '',
        price : ''
    })

    

    const handleChange = (e)=>{
        const name = e.target.name;
        const value = e.target.value;
        setNewCart({...newCart ,[name] : value})
    }

    const handleSubmit =(e)=>{
        e.preventDefault()
        console.log(newCart);
        setCart([...cart, newCart])
        // setNewCart({
        //     title : '',
        //     description : '',
        //     price : ''
        // })
    }

    const handleStorage =(e)=>{

    }

    const handleAddtoCart =(itemTitle)=>{
        
    }

    const handleDeletetoCart=(itemTitle)=>{
        console.log('item deleted',itemTitle)
        setCart(cart.filter((item)=>{
            return (
                item.title !== itemTitle
            )
            
        }))
    }
  
    
    return (
    <>
    

    <div>
    <div className="flex-container-1">

    <div>
        <Typography  variant='h4'>
        Additems
        </Typography>
    </div>
      
      
        <div>
          <FormControl  className="LoginForm">
            <div >
            <TextField  className="formItems"
              variant="outlined"
              label="Title"
              type="text"
              name="title"
              onChange={handleChange}
              value={newCart.title}
            />
            </div>
            
            <div>
            <TextField  className="formItems"
              variant="outlined"
              label="Description"
              type="text"
              name="description"
              onChange={handleChange}
              value={newCart.description}
            />
            </div>


            <div>
            <TextField className="formItems"
              variant="outlined"
              label="Price"
              type="number"
              name="price"
              onChange={handleChange}
              value={newCart.price}
            />
            </div>
            
            

            <div>
            <Button className="formItems" type="submit" variant="contained" onClick={handleSubmit}>
              Add item
            </Button>
            </div>
            
        <div>
          <Button variant="outlined" onClick={handleStorage}>btn storage</Button>
        </div>

          </FormControl>
        </div>

      </div>

    </div>
    <div>
        <Typography variant='h4'>
            Items List
        </Typography>
    </div>
    
    <div className='itemsContainer'>

    {
        cart.map((item ,key)=>{
            return (
                <div key={key}>
                <ItemsCard handleDeletetoCart={handleDeletetoCart} handleAddtoCart={handleAddtoCart}  cart={item}/>
                
                </div>
            )
            
        })
    }

    </div>

    </>
  )
}

export default Additems