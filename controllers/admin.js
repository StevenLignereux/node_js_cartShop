const getIndex = (req, res) => {
    res.render('admin', {
        title: 'Admin',
        admin:true
    });
}

module.exports = {
    getIndex: getIndex
}