import { FunctionComponent } from "react";
import { Segment } from "semantic-ui-react";
import AqInfo from "../aqInfo";
import SearchCity from "../searchCity";
import { Props } from "./interface";

const CityInfo: FunctionComponent<Props> = (props) => {
  const { cityIndex } = props;
  return (
    <Segment>
      <SearchCity cityIndex={cityIndex} />
      <AqInfo cityIndex={cityIndex} />
    </Segment>
  );
};

export default CityInfo;
