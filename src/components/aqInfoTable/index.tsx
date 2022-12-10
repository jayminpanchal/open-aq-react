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

  function getBetterCity(parameter: string, value1?: number, value2?: number) {
    if (!value1 || !value2) return " ---- ";

    switch (parameter) {
      case "no2":
      case "pm25":
      case "pm10":
      case "so2":
        return value1 > value2 ? location2?.city : location1?.city;
      case "o3":
      case "co":
        return value1 > value2 ? location1?.city : location2?.city;
      default:
        return "";
    }
  }

  return (
    <Card fluid>
      <Card.Content>
        <Card.Header>{getTableHeader()}</Card.Header>
        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Parameter</Table.HeaderCell>
              <Table.HeaderCell>City1</Table.HeaderCell>
              <Table.HeaderCell>City2</Table.HeaderCell>
              <Table.HeaderCell>Better City</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {tableData.map((param) => (
              <Table.Row key={`${param.displayName}_param`}>
                <Table.Cell>{param.displayName}</Table.Cell>
                <Table.Cell>{`${param.city1} ${param.unit}`}</Table.Cell>
                <Table.Cell>{`${param.city2} ${param.unit}`}</Table.Cell>
                <Table.Cell>
                  {getBetterCity(param.displayName, param.city1, param.city2)}
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </Card.Content>
    </Card>
  );
};

export default AqInfoTable;
