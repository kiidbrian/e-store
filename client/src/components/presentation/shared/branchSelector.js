import * as PropTypes from "prop-types";
import React, {Component} from "react";

export default class BranchSelector extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedBranch: ""
        }
    }

    render() {
        const {branches, selectedBranch, onSelectBranchFn} = this.props;
        return <React.Fragment>
            <div className="btn-group branches w-100">
                <button type="button"
                        className="btn btn-store text-left  inverse btn-block dropdown-toggle"
                        data-toggle="dropdown">{selectedBranch.name} <span
                    className="caret"/>
                </button>
                <div className="dropdown-max">
                    <ul className="dropdown-menu p-0 scrollable-menu" role="menu">
                        {this.props.branches.map(x => (
                            <li key={x.id}>
                                <a href="#" className="border-bottom d-block py-2"
                                   onClick={() => onSelectBranchFn(x.name)}>{x.name}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <button className="btn btn-store w-100 mt-3" data-toggle="modal"
                    data-target="#branchModal"
                    onClick={e => this.handleBranchChange(e)}>
                Go to Branch
            </button>
        </React.Fragment>;
    }

    handleBranchChange(e) {
        this.props.onSelectBranch(this.props.selectedBranch, true);
    }
}

BranchSelector.propTypes = {
    selectedBranch: PropTypes.any,
    branches: PropTypes.any,
    onSelectBranch: PropTypes.func
};