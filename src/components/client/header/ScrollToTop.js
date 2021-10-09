import React from "react";
import Fab from '@mui/material/Fab';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';


import './ScrollToTop.scss';

class ScrollToTop extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            is_visible: false
        };
    }

    componentDidMount() {
        document.addEventListener("scroll", (e) => {
            this.toggleVisibility();
        });
    }

    toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            this.setState({
                is_visible: true
            });
        } else {
            this.setState({
                is_visible: false
            });
        }
    }

    scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }

    render() {
        return (
            <div className={this.state.is_visible ? "scroll-to-top active-scroll" : "scroll-to-top"}>
                <Fab color="secondary" size="small" aria-label="scroll back to top"  onClick={() => this.scrollToTop()}>
                    <KeyboardArrowUpIcon />
                </Fab>
            </div>
        );
    }
}


export default ScrollToTop;