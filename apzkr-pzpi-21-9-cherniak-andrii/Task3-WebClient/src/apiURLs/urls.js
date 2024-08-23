export const API_URL = 'http://localhost:3000/api';

const USER_URL = '/user';
export const LOGIN_URL = `${USER_URL}/login`;
export const CHECK_URL = `${USER_URL}/check`;
export const ALL_USERS_URL = `${USER_URL}`;

const TRENING_URL = '/trening';
export const ONE_TRENING = `${TRENING_URL}/:id`;
export const DELETE_TRENING = ONE_TRENING;
export const UPDATE_TRRENING = ONE_TRENING;
export const CREATE_TRENING = TRENING_URL;
export const GET_ALL_TRENINGS = TRENING_URL;

const STORE_URL = '/store';
export const CREATE_STORE = STORE_URL;
export const ALL_STORES_URL = STORE_URL;
export const ONE_STORE_URL = `${STORE_URL}/:id`;
export const UPDATE_STORE_URL = ONE_STORE_URL;
export const DELETE_STORE_URL = ONE_STORE_URL;

const ROLE_URL = '/role';
export const CREATE_ROLE_URL = ROLE_URL;
export const ALL_ROLES_URL = ROLE_URL;
export const ONE_ROLE_URL = `${ROLE_URL}/:id`;
export const UPDATE_ROLE_URL = ONE_ROLE_URL;
export const DELETE_ROLE_URL = ONE_ROLE_URL;

const PROMOTION_URL = '/promotion';
export const CREATE_PROMOTION_URL = PROMOTION_URL;
export const ALL_PROMOTIONS_URL = PROMOTION_URL;
export const ONE_PROMOTION_URL = `${PROMOTION_URL}/:id`;
export const UPDATE_PROMOTION_URL = ONE_PROMOTION_URL;
export const DELETE_PROMOTION_URL = ONE_PROMOTION_URL;

const PROMSTATUS_URL = '/prom-status';
export const CREATE_PROMSTATUS_URL = PROMSTATUS_URL;
export const ALL_PROMSTATUS_URL = PROMSTATUS_URL;
export const ONE_PROMSTATUS_URL = `${PROMSTATUS_URL}/:id`;
export const UPDATE_PROMSTATUS_URL = ONE_PROMSTATUS_URL;
export const DELETE_PROMSTATUS_URL = ONE_PROMSTATUS_URL;

const TICKET_URL = '/ticket';
export const CREATE_TICKET_URL = TICKET_URL;
export const ALL_TICKET_URL = TICKET_URL;
export const ONE_TICKET_URL = `${TICKET_URL}/:id`;
export const UPDATE_TICKET_URL = ONE_TICKET_URL;
export const DELETE_TICKET_URL = ONE_TICKET_URL;

const TICKETSTATUS_URL = '/ticket-status';
export const CREATE_TICKETSTATUS_URL = TICKETSTATUS_URL;
export const ALL_TICKETSTATUS_URL = TICKETSTATUS_URL;
export const ONE_TICKETSTATUS_URL = `${TICKETSTATUS_URL}/:id`;
export const UPDATE_TICKETSTATUS_URL = ONE_TICKETSTATUS_URL;
export const DELETE_TICKETSTATUS_URL = ONE_TICKETSTATUS_URL;

const TICKETTYPE_URL = '/ticket-type';
export const CREATE_TICKETTYPE_URL = TICKETTYPE_URL;
export const ALL_TICKETTYPE_URL = TICKETTYPE_URL;
export const ONE_TICKETTYPE_URL = `${TICKETTYPE_URL}/:id`;
export const UPDATE_TICKETTYPE_URL = ONE_TICKETTYPE_URL;
export const DELETE_TICKETTYPE_URL = ONE_TICKETTYPE_URL;