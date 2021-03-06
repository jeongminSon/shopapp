import * as React from 'react'

interface OwnProps {}

interface OwnState {}

class Menu extends React.Component<OwnProps, OwnState> {
  render() {
    const dividingStyle = {
      borderBottom: '1px solid lightgray',
      paddingBottom: 10,
      marginBottom: 10,
    }
    return (
      <>
        <h1 style={dividingStyle}>메뉴관리</h1>
        <div style={dividingStyle} />
      </>
    )
  }
}

export default Menu
