const Database = require('./db');
const saveOrphanage = require('./saveOrphanage');

Database.then(async (db) => {
    // inserir dados na tabela
    // await saveOrphanage(db, {
    //     lat: '-23.0462184',
    //     lng: '-45.58833113',
    //     name: 'Lar das meninas',
    //     about: 'Presta assistencia a meninas',
    //     images: [
    //         'https://images.unsplash.com/photo-1600985338141-c137c5b33431?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80',
    //         'https://images.unsplash.com/photo-1601448971494-0cb12d3bbb53?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80'
    //     ].toString(),
    //     instructions: 'Venha conhecer o lar das meninas',
    //     opening_hours: 'Horario de visitas das 8h as 18h',
    //     open_on_weekends: '1'

    // })

    //consltar dados da tabela
    // const selectedOrphanages = await db.all(`SELECT * FROM orphanages`)
    // console.log(selectedOrphanages)

    // //consultar somente um orfanato pelo id
    // const orphanage = await db.all(`SELECT * FROM orphanages WHERE id = '1'`)
    // console.log(orphanage)

    //deletar dados da tabela
    // console.log(await db.run(`DELETE FROM orphanages WHERE id = '2'`))
})