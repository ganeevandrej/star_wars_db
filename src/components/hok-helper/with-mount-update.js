import { Component } from "react";

export const withMountUpdate = (Wrapped) => {
    return class extends Component {
        state = {
            item: null,
            itemUrl: null,
            loading: false,
            error: false
        }

        componentDidMount() {
            this.updateItem();
        }

        componentDidUpdate(prevProps, prevState, snapshot) {
            if(prevProps.itemId !== this.props.itemId  ||
                prevProps.getData !== this.props.getData ||
                prevProps.getImageUrl !== this.props.getImageUrl ) {
                this.updateItem();
            }
        }

        updateItem() {
            const { itemId, getData, getImageUrl } = this.props;

            if(itemId) {
                this.setState({
                    loading: true,
                    error: false
                });
                getData(itemId)
                    .then((item) => {
                        this.setState({
                            item,
                            itemUrl: getImageUrl(item),
                            loading: false,
                            error: false
                        });
                    })
                    .catch(() => this.setState({
                        error: true,
                        loading: false
                    }));
            }
        }

        render() {
            return <Wrapped {...this.props} {...this.state} />
        }
    }
}