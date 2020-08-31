import React, {useState} from 'react';
import '../App.css';
import { Request } from '../Api/Request'
import PaginationList from 'react-pagination-list'
import Loader from 'react-loader-spinner'

function SearchList() {
    const [ product, setProduct ] = useState([])
    const [ query, setQuery ] = useState('')
    const [ loading, setLoading ] = useState(false)
    const search = () => {
        setLoading(true)
        Request(query).then((res) => {
            setProduct(res.data)
            setLoading(false)
        })
    }
    return (
            <div className='SearchBox'>
                <div className='SearchBar'>
                    <input className='input' type="text" placeholder="Product Name" onChange={e => setQuery(e.target.value)}/>
                    <button className='button' onClick={search}>Search</button>
                </div>
                <div className='pagination'>
                    {loading ? <Loader type="Puff"
                                       color="#FFF"
                                       height={100}
                                       width={100}
                    /> : <PaginationList
                        data={product}
                        pageSize={5}
                        renderItem={(item) => (
                            <div className='list' key={item.id}>
                                <li ><text className='listItem'>{item.brand}</text> <text>- {item.name}</text></li>
                            </div>
                        )}
                    />}
                </div>
            </div>
    );
}

export default SearchList;
