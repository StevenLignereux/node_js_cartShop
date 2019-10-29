const getIndex = (req, res) => {
    res.render('index', {
        title: 'Accueil',
        path: '/'
    });
}

const getCart = (req, res) => {
    res.render('cart', {
        title: 'Panier',
        path: '/panier'
    });
} 

module.exports = {
    getIndex: getIndex,
    getCart: getCart
}