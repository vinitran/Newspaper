import React from 'react';
import VerticalList from './VerticalList';

export default function VideoNews({ data, focusedIndex }) {
    return <VerticalList data={data} focusedIndex={focusedIndex} />
}

