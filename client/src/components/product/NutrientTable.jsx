import React from 'react';
import { Table } from 'semantic-ui-react';
import { capitalize } from '../../helpers/capitalize'
import moveToBeggining from '../../helpers/moveToBeggining'

export default function NutrientTable({ nutriments }) {
  const filteredNutriments = {
    'energy-kcal': nutriments['energy-kcal'],
    proteins: nutriments.proteins,
    carbohydrates: nutriments.carbohydrates,
    fat: nutriments.fat
  }
  const entries = moveToBeggining(Object.entries(filteredNutriments), 'energy-kcal') 
  const renderTableRow = entries.map(([name, value]) => {
    return (
      <Table.Row key={name}>
        <Table.Cell>{capitalize(name).replace('-', ' ')}</Table.Cell>
        <Table.Cell>{value.toFixed(1).replace('.0', '')}</Table.Cell>
      </Table.Row>
    );
  });
  return <>{renderTableRow}</>;
}
