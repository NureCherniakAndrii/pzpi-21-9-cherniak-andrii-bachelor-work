import {createContext} from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import UserStore from "./store/UserStore.js";
import TreningStore from "./store/TreningStore.js";
import StoreStore from "./store/StoreStore.js";
import RoleStore from "./store/RoleStore.js";
import PromotionStore from "./store/PromotionStore.js";
import PromStatusStore from "./store/PromStatusStore.js";
import TicketStatusStore from "./store/TicketStatusStore.js";
import TicketStore from "./store/TicketStore.js";
import TicketTypeStore from "./store/TicketTypeStore.js";


export const Context = createContext(null);

ReactDOM.createRoot(document.getElementById('root')).render(
  <Context.Provider value={{
      user: new UserStore(),
      trening: new TreningStore(),
      store: new StoreStore(),
      role: new RoleStore(),
      promotion: new PromotionStore(),
      promStatus: new PromStatusStore(),
      ticket: new TicketStore(),
      ticketStatus: new TicketStatusStore(),
      ticketType: new TicketTypeStore()
  }}>
    <App />
  </Context.Provider>,
)
