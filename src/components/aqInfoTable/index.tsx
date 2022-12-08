import { FunctionComponent } from "react";
import { useSelector } from "react-redux";
import { Card, Table } from "semantic-ui-react";
import { getLocation } from "../../store/selectors";
import { buildTableData } from "./build";

const AqInfoTable: FunctionComponent = () => {
  const location1 = useSelector(getLocation("city1"));
  const location2 = useSelector(getLocation("city2"));

  const tableData = buildTableData(location1, location2);

  if (!location1 && !location2) return null;

  function getTableHeader() {
    if (location1 && location2)
      return `${location1?.city} vs ${location2?.city}`;

    if (location1) return location1.city;
    if (location2) return location2.city;

    return "";
  }

  return (
    <Card fluid>
      <Card.Content>
        <Card.Header>{getTableHeader()}</Card.Header>
        <Table celled>
          <Table.Body>
            {tableData.map((param) => (
              <Table.Row key={`${param.id}_param`}>
                <Table.Cell>{param.displayName}</Table.Cell>
                <Table.Cell>{`${param.city1} ${param.unit}`}</Table.Cell>
                <Table.Cell>{`${param.city2} ${param.unit}`}</Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </Card.Content>
    </Card>
  );
};

export default AqInfoTable;
