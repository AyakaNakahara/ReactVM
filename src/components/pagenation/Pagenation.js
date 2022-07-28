import React from 'react';
import './Pagination.scss';

function Pagination(props) {
    const { page, onChange } = props;

    function onPageChange(page) {
        onChange(page)
    }

    return (
        <div calss='pagination-wrapper'>
            <ul className='pagination'>
                <li className='pre-arrow'><a href='#'>&laquo;</a></li>
                <li><a onClick={() => onPageChange(1)}>1</a></li>
                <li><a onClick={() => onPageChange(2)}>2</a></li>
                <li><a onClick={() => onPageChange(3)}>3</a></li>
                <li><a onClick={() => onPageChange(4)}>4</a></li>
                <li className='next-arrow'><a href='#'>&raquo;</a></li>
            </ul>
        </div>
    );
}
export default Pagination;