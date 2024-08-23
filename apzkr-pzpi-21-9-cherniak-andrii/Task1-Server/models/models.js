const db = require('../db');
const {DataTypes} = require('sequelize');

const User = db.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, allowNull: false, autoIncrement: true},
    name: {type: DataTypes.STRING, allowNull: false},
    surname: {type: DataTypes.STRING, allowNull: false},
    email: {type: DataTypes.STRING, allowNull: false},
    password: {type: DataTypes.STRING, allowNull: false},
    // roleId: {type: DataTypes.INTEGER, allowNull: false},
    // storeId: {type: DataTypes.ARRAY(DataTypes.INTEGER), allowNull: false},
});

const Trening = db.define('trening', {
    id: {type: DataTypes.INTEGER, allowNull: false, primaryKey: true, autoIncrement: true},
    title: {type: DataTypes.STRING, allowNull: false},
    description: {type: DataTypes.STRING, allowNull: false},
    duration: {type: DataTypes.INTEGER, allowNull: false},
    userId: {type: DataTypes.ARRAY(DataTypes.INTEGER), allowNull: false},
})

const Role = db.define('role', {
    id: {type: DataTypes.INTEGER, allowNull: false, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, allowNull: false},
})

const Store = db.define('store', {
    id: {type: DataTypes.INTEGER, allowNull: false, primaryKey: true, autoIncrement: true},
    address: {type: DataTypes.STRING, allowNull: false},
    name: {type: DataTypes.STRING, allowNull: false},
    photo: {type: DataTypes.STRING, allowNull: false},
})

const Promotion = db.define('promotion', {
    id: {type: DataTypes.INTEGER, allowNull: false, primaryKey: true, autoIncrement: true},
    title: {type: DataTypes.STRING, allowNull: false},
    text: {type: DataTypes.STRING, allowNull: false},
    // promStatusId: {type: DataTypes.INTEGER, allowNull: false},
    storeId: {type: DataTypes.ARRAY(DataTypes.INTEGER), allowNull: false},
})

const PromStatus = db.define('promStatus', {
    id: {type: DataTypes.INTEGER, allowNull: false, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, allowNull: false},
})

const Ticket = db.define('ticket', {
    id: {type: DataTypes.INTEGER, allowNull: false, autoIncrement: true, primaryKey: true},
    title: {type: DataTypes.STRING, allowNull: false},
    text: {type: DataTypes.STRING, allowNull: false},
    // ticketTypeId: {type: DataTypes.INTEGER, allowNull: false},
    // ticketStatusId: {type: DataTypes.INTEGER, allowNull: false},
    // userId: {type: DataTypes.INTEGER, allowNull: false},
    // storeId: {type: DataTypes.INTEGER, allowNull: false},
})

const TicketStatus = db.define('ticketStatus', {
    id: {type: DataTypes.INTEGER, allowNull: false, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, allowNull: false},
})

const TicketType = db.define('ticketType', {
    id: {type: DataTypes.INTEGER, allowNull: false, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, allowNull: false},
})

const Product = db.define('product', {
    id: {type: DataTypes.INTEGER, autoIncrement: true, allowNull: false, primaryKey: true},
    name: {type: DataTypes.STRING, allowNull: false},
    photo: {type: DataTypes.STRING, allowNull: true},
    barcode: {type: DataTypes.BIGINT, allowNull: false},
    count: {type: DataTypes.INTEGER, allowNull: false, defaultValue: 0},
    storeId: {type: DataTypes.INTEGER, allowNull: false}
})




// User.hasOne(Basket);
// Basket.belongsTo(User);
//
// User.hasMany(Rating);
// Rating.belongsTo(User);


Trening.hasMany(User);
User.belongsTo(Trening);

Role.hasOne(User);
User.belongsTo(Role);

// User.hasOne(Role);
// Role.belongsTo(User);

Store.hasOne(User);
User.belongsTo(Store);

// User.hasOne(Store);
// Store.belongsTo(User);

// Store.hasMany(Promotion);
// Promotion.belongsTo(Store);

Promotion.hasMany(Store);
Store.belongsTo(Promotion);

Store.hasMany(Product);
Product.belongsTo(Store);

// Promotion.hasMany(Store);
// Store.belongsTo(Promotion);


PromStatus.hasOne(PromStatus);
Promotion.belongsTo(PromStatus);

// Promotion.hasOne(PromStatus);
// PromStatus.belongsTo(Promotion);

User.hasOne(Ticket);
Ticket.belongsTo(User);

// Ticket.hasOne(User);
// User.belongsTo(Ticket);

Store.hasOne(Ticket);
Ticket.belongsTo(Store);

// Ticket.hasOne(Store);
// Store.belongsTo(Ticket);

TicketStatus.hasOne(Ticket);
Ticket.belongsTo(TicketStatus);

// Ticket.hasOne(TicketStatus);
// TicketStatus.belongsTo(Ticket);

TicketType.hasOne(Ticket);
Ticket.belongsTo(TicketType);

// Ticket.hasOne(TicketType);
// TicketType.belongsTo(Ticket);


module.exports = {
    Trening,
    User,
    Role,
    Store,
    Promotion,
    PromStatus,
    TicketStatus,
    TicketType,
    Ticket,
    Product
}