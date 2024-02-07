import * as React from 'react';
const styles = require('./SdirButton.module.scss');

export interface StyledButtonProps {
  primary?: boolean;
  disabled?: boolean;
  children?: React.ReactNode;
}

export default class StyledButton extends React.Component<StyledButtonProps> {
  constructor(props: StyledButtonProps) {
    super(props);
  }

  public render() {
    let classes = `${this.props.primary ? styles.primary : styles.secondary} ${this.props.disabled ? this.props.primary ? styles['primary-disabled'] : styles['secondary-disabled'] : ''}`;
    return (      
      <button className={classes}>{this.props.children}</button>
    );
  }
}
