import { FunctionComponent } from "react";
import { useSelector } from "react-redux";
import { Card } from "semantic-ui-react";
import { getError } from "../../store/selectors";
import { Props } from "./interface";

const AqInfo: FunctionComponent<Props> = (props) => {
  const { cityIndex } = props;
  const error = useSelector(getError(cityIndex));

  if (error) {
    return (
      <Card>
        <Card.Content>
          <Card.Header>{error}</Card.Header>
        </Card.Content>
      </Card>
    );
  }
  return null;
};

export default AqInfo;
