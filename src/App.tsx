import { Container, Grid, Header } from "semantic-ui-react";

import "semantic-ui-css/semantic.min.css";
import CityInfo from "./components/cityInfo";
import AqInfoTable from "./components/aqInfoTable";

function App() {
  return (
    <Container>
      <Header as="h2">City Air Quality</Header>
      <Grid>
        <Grid.Row columns={2}>
          <Grid.Column>
            <CityInfo cityIndex="city1" />
          </Grid.Column>
          <Grid.Column>
            <CityInfo cityIndex="city2" />
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <Grid>
      <AqInfoTable />
      </Grid>
    </Container>
  );
}

export default App;
