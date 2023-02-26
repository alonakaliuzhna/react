import React, { Component } from 'react';

export default class ShoppingList extends React.Component {
  render() {
    return (
      <div className="shopping-list">
        <h1>
          Список покупок для {this.props.name} на такую сумму денег{' '}
          {this.props.money}
        </h1>
        <ul>
          <li>Instagram</li>
          <li>WhatsApp</li>
          <li>Oculus</li>
        </ul>
      </div>
    );
  }
}
