import React from "react";

interface StateProps {
    sm?: string;
    defaultSpace: string;
}

export default class Spacer extends React.Component<StateProps> {
    state: { space: string };
    resize: (event: UIEvent) => void;

    constructor(props: StateProps) {
        super(props);
        this.state = {
            space: props.defaultSpace,
        };
        this.resize = this.handleWindowResize.bind(this);
    }

    handleWindowResize() {
        const resolution = window.innerWidth;
        const isMobile = resolution <= 768;
        const space = isMobile ? this.props.sm : this.props.defaultSpace;
        this.setState({ space });
    }

    componentDidMount() {
        this.handleWindowResize();
        window.addEventListener("resize", this.resize);
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.resize);
    }

    render() {
        return <div style={{ height: this.state.space }} />;
    }
}
