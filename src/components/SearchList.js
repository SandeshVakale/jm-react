import React, {useState} from 'react';
import '../App.css';
import { Request } from '../Api/Request'
import PaginationList from 'react-pagination-list'
import Loader from 'react-loader-spinner'

function SearchList() {
    const [ product, setProduct ] = useState([])
    const [ query, setQuery ] = useState('')
    const [ error, setError ] = useState(false)
    const [ loading, setLoading ] = useState(false)
    const search = () => {
        setLoading(true)
        Request(query).then((res) => {
            if (res.data.length > 0) {
                setProduct(res.data)
                setError(false)
            } else {
                setError(true)
            }
            setLoading(false)
        }).catch(() => {
            setError(true)})
    }
    return (
            <div className='SearchBox'>
                <div className='SearchBar'>
                    <input className='input' type="text" placeholder="Product Name" onChange={e => setQuery(e.target.value)}/>
                    <button className='button' onClick={search}>Search</button>
                </div>
                <div className={loading ? 'Loader' : 'pagination'}>
                    {loading ? <Loader type="Puff"
                                       color="#FFF"
                                       height={100}
                                       width={100}
                    /> : error ? <div className='Loader'>Product not found, search with another keyword</div> : <PaginationList
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
