import React, { useState } from 'react'
import { Input } from 'antd';

const { Search } = Input;

function SearchFeature(props) {

    const [SearchTerms, setSearchTerms] = useState("")

    const onChangeSearch = (event) => {
        setSearchTerms(event.currentTarget.value)

        props.refreshFunction(event.currentTarget.value)

    }

    return (
        <div className="Search">
            <Search className="Search"
                value={SearchTerms}
                onChange={onChangeSearch}
                Searchplaceholder="Search By Typing..."
            />
        </div>
    )
}

export default SearchFeature