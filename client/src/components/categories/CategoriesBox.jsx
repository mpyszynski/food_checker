import React from 'react'
import { Grid, Segment } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import './Categories.css'

export default function CategoriesBox({name, products, id}) {
    const title = name.split(':')[1]
    const categoryName = id.split(':')[1]
    return (
        <Grid.Column as={Link} to={`/categories/${categoryName}`} mobile={16} tablet={5} computer={4} className='categories__grid'>
        <Segment className='categories__segment'>
        <h1>{title}</h1>
            <h4>Products: {products}</h4>
        </Segment>
           
        </Grid.Column>
    )
}
