import React from 'react'
import { Label } from "semantic-ui-react";
import { capitalize } from "./capitalize";

export default (array) => {
    const labelsArray = array.replace('en:', '').replace(/-/g, ' ').split(',');
    return labelsArray.map(item => (
      <Label color='green' className='products__label' key={item}>
        {capitalize(item).trim()}
      </Label>
    ));
}