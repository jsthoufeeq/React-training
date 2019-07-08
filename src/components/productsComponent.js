import React from 'react';
import axios from 'axios';

class ProductsComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tableData : [],
            postData : {},
            errors: false
        }      
    }

    componentDidMount() {
        const body = {
            title: 'new row',
            body: 'new content is added to the table',
            userId: 11
        }
        axios.get('http://jsonplaceholder.typicode.com/posts')
        .then(response => {
            //success
            this.setState({
                tableData: response.data
            })
        })
        .catch(error => {
            //failure
            console.log('error', error);
            this.setState({
                errors: true
            })

        })

        axios.post('http://jsonplaceholder.typicode.com/posts', body)
        .then(response => {
            //success
            this.setState({
                postData: response.data
            })
        })
        .catch(error => {
            //failure
            console.log('error', error);
            this.setState({
                errors: true
            })

        })
    }

    render() {
        let trElem;
        if(this.state.tableData.length) {
            trElem = this.state.tableData.map((data, index) => {
                return <tr key={index}>
                    <td>{data.userId}</td>
                    <td>{data.id}</td>
                    <td>{data.title}</td>
                    <td>{data.body}</td>
                </tr>
            })
        }
        return (
            <div>
                <h1>Get call</h1>
                <table className="table table-bordered table-dark">
                    <thead>
                        <tr>
                            <th>USER ID</th>
                            <th>ID</th>
                            <th>TITLE</th>
                            <th>CONTENT</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.errors ? <td>There is a technical issue</td> : true}
                        
                        {this.state.tableData.length ? trElem : 
                                <td>loading...</td>}
                    </tbody>
                </table>
            

                <h1>Post call</h1>
                <table className="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>User ID</th>
                            <th>title</th>
                            <th>body</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{this.state.postData.id || ''}</td>
                            <td>{this.state.postData.userId || ''}</td>
                            <td>{this.state.postData.title || ''}</td>
                            <td>{this.state.postData.body || ''}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

//REST API
//GET -- axios.get(); 
//POST -- axios.post()
//PUT -- axios.put()
//PATCH -- axios.patch()
//DELETE -- axios.delete()

export default ProductsComponent;