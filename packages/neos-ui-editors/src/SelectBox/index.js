import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import SimpleSelectBoxEditor from './SimpleSelectBoxEditor';
import DataSourceBasedSelectBoxEditor from './DataSourceBasedSelectBoxEditor';

export default class SelectBoxEditor extends PureComponent {
    static propTypes = {
        options: PropTypes.shape({
            dataSourceIdentifier: PropTypes.string,
            dataSourceUri: PropTypes.string,
        }).isRequired
    };

    render() {
        const {options} = this.props;

        if (options.dataSourceIdentifier || options.dataSourceUri) {
            return <DataSourceBasedSelectBoxEditor {...this.props} />
        } else {
            return <SimpleSelectBoxEditor {...this.props} />
        }
    }
}
