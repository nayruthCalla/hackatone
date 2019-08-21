import React, { useState, useEffect } from 'react';
import Header from '../Header'
import OrderCard from './order-card';
import Options from '../Options'
import getOrders from '../../controller/orders/getOrder'

const user = JSON.parse(localStorage.getItem('user'));
const Pedidos = (props) => {
  const [orders, setOrders] = useState([]);
  const [type, setType] = useState('pending');

  useEffect(() => {
    const interval = () => {

      getOrders(localStorage.getItem('token'),user._id).then((data) => {
        console.log(data)
        setOrders(data)
      })

    }
    interval();
    const processId = setInterval(interval, 2000)
    return () => clearInterval(processId)

  }, []);

  return (
    <div className="container-fluid">
      <Header logoutprop={props} />
      <div className="w-100">
        <ul className="nav nav-tabs w-100" role="tablist">
          <Options click={() => setType('pending')} options="Pendientes" aClass="nav-link active" />
          <Options click={() => setType('delivered')} options="Entregados" aClass="nav-link" />
        </ul>
        <section data-testid="opt" className="row w-100 justify-content-between">
          {orders.length === 0 &&
            <div className="mt-5 w-100 text-align">
              No hay órdenes pendientes.
            </div>}
          {orders.length !== 0 &&
            orders.map(el => {
              if ((el.status === 'pending' || el.status === 'canceled') && type === 'pending') {
                return <OrderCard order={el} key={el._id} />
              } else if (el.status === 'delivered' && type === 'delivered') {
                return <OrderCard order={el} key={el._id} />
              }
            }).sort((a, b) => {
              const aValue = a.props.order.dateEntry;
              const bValue = b.props.order.dateEntry;
              if (new Date(aValue) > new Date(bValue)) {
                return 1;
              } else if (new Date(aValue) < new Date(bValue)) {
                return -1;
              } else {
                return 0;
              }
            })
          }
        </section>
      </div>
    </div>
  )
}
export default Pedidos