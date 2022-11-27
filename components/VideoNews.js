import React from 'react';
import VerticalList from './VerticalList';

export default function VideoNews({ data, focusedIndex, color, style }) {
    return <VerticalList data={data} focusedIndex={focusedIndex} color={color} style={style} />
}

