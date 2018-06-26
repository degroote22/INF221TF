// import Chip from "@material-ui/core/Chip";
import MenuItem from "@material-ui/core/MenuItem";
import Typography from "@material-ui/core/Typography";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
import ClearIcon from "@material-ui/icons/Clear";
import * as React from "react";
import Select, {
  ArrowRendererProps,
  HandlerRendererResult,
  OptionComponentProps,
  OptionValues,
  ReactSelectProps
} from "react-select";

export class Option extends React.Component<
  OptionComponentProps<OptionValues>
> {
  public render() {
    const { children, isFocused, isSelected, onFocus } = this.props;

    return (
      <MenuItem
        onFocus={onFocus as any}
        selected={isFocused}
        onClick={this.handleClick}
        component="div"
        style={{
          fontWeight: isSelected ? 500 : 400
        }}
      >
        {children}
      </MenuItem>
    );
  }

  private handleClick = (event: React.MouseEvent<HTMLElement>) => {
    if (this.props.onSelect) {
      this.props.onSelect(this.props.option, event);
    }
  };
}

// tslint:disable-next-line:max-classes-per-file
export class SelectWrapped extends React.Component {
  public render() {
    return (
      <Select
        optionComponent={Option}
        noResultsText={this.renderNoResultsText()}
        arrowRenderer={this.renderArrow}
        clearRenderer={this.renderClear}
        valueComponent={this.renderValueComponent}
        {...this.props}
      />
    );
  }

  private renderValueComponent = (
    valueProps: ReactSelectProps<OptionValues>
  ) => {
    const { children } = valueProps;

    return <div className="Select-value">{children}</div>;
  };

  private renderClear = () => <ClearIcon />;

  private renderArrow = (
    arrowProps: ArrowRendererProps
  ): HandlerRendererResult => {
    return arrowProps.isOpen ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />;
  };

  private renderNoResultsText = () => (
    <Typography>Nenhum resultado encontrado</Typography>
  );
}
