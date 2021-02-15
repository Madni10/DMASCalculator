import React from 'react'

interface Props {
    age?: number,
    name?: string
    obj?: new2,
    
}

interface new2{

}

export const Test: React.FC<Props> = ({}) => {
        return (
            <div>
                <h1>{}</h1>
            </div>
        );
}