import React from 'react';

const isList = () => WrappedComponent => {
  const IsList = props => (
    <div>
      {props.data.map(item => <WrappedComponent {...item} key={item.id} />)}
    </div>
  );

  return IsList;
};

export default isList;
