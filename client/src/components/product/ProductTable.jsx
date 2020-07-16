import React from 'react';
import { Table } from 'semantic-ui-react';
import { capitalize } from '../../helpers/capitalize';

export default function ProductTable({ ingridients }) {
  const renderTableRow = ingridients.map((ingridient, index) => {
    const name = ingridient.split(':')[1].replace(/-/g, ' ');
    return (
      <Table.Row key={ingridient}>
        <Table.Cell>{index + 1}</Table.Cell>
        <Table.Cell>{capitalize(name)}</Table.Cell>
      </Table.Row>
    );
  });
  return <>{renderTableRow}</>;
}
