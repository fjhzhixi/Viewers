import { connect } from 'react-redux';
import FlexboxLayout from './FlexboxLayout';

const mapStateToProps = state => {
    return {
        leftSidebarOpen: state.ui.leftSidebarOpen,
        rightSidebarOpen: state.ui.rightSidebarOpen,
        stackLoadingProgressMap: state.loading.progress
    };
};

const ConnectedFlexboxLayout = connect(
    mapStateToProps,
    null
)(FlexboxLayout);

export default ConnectedFlexboxLayout;
