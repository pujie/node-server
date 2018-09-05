var getProducts = () => {
        sql = 'select * from products'
        return sql;
    }
    module.exports = {
        getProducts:getProducts,
    }
