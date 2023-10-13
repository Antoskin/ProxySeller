import React from 'react';

function SortPanel({ascEvent, descEvent, onReset}) {
    return (
        <div>
            <button onClick={ascEvent}>asc</button>
            <button onClick={descEvent}>desc</button>
            <button onClick={onReset}>reset</button>
        </div>
    );
}

export default SortPanel;