import React from 'react';

const List = ({ people }) => {
    return (
        <>
            {people.map((person) => {
                const { id, name, age, image } = person;
                return (

                    <div className="box mx-6">
                        <article className="media">
                            <div className="media-left">
                                <figure className=" image is-64x64">
                                    <img src={image} alt={name} />
                                </figure>
                            </div>
                            <div className="media-content">
                                <div className="content" key={id}>
                                    <p>
                                        <strong>{name}    </strong>    
                                        <br />
                                        <small>{age} years</small> ,happy birthday!
                                    </p>
                                </div>

                            </div>
                        </article>
                    </div>
                );
            })}
        </>
    )
};

export default List;
