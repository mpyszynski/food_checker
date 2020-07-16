import React from 'react'
import { Table } from 'semantic-ui-react'

export default function CustomTable({children, firstCell, secondCell}) {
    return (
        <Table celled>
        <Table.Header>
        <Table.Row>
          <Table.HeaderCell>{firstCell}</Table.HeaderCell>
          <Table.HeaderCell>{secondCell}</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>{children}</Table.Body>
    </Table>
    )
}
