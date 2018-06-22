import Radio from "@material-ui/core/Radio";
import * as React from "react";

export type ISelectFiveScaleValues =
  | "_NONE_"
  | "0"
  | "1"
  | "2"
  | "3"
  | "4"
  | "5";
const SelectFiveScaleValues = ["0", "1", "2", "3", "4", "5"];
class SelectFiveScale extends React.Component<{
  selected: ISelectFiveScaleValues;
  onChange: (value: ISelectFiveScaleValues) => void;
}> {
  public render() {
    return (
      <div>
        {SelectFiveScaleValues.map(v => {
          return (
            <React.Fragment key={v}>
              <Radio
                checked={this.props.selected === v}
                onChange={this.handleChange}
                value={v}
                aria-label={v}
                color="primary"
              />
              {v}
            </React.Fragment>
          );
        })}
      </div>
    );
  }

  private handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.props.onChange(event.target.value as ISelectFiveScaleValues);
  };
}

export default SelectFiveScale;
